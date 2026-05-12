import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "/tmp/mobile-audit";

const PAGES = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "regulation", path: "/regulation" },
  { name: "team", path: "/team" },
  { name: "faq", path: "/faq" },
  { name: "contact", path: "/contact" },
];

const VIEWPORTS = [
  { label: "375", width: 375, height: 667 },   // iPhone SE
  { label: "390", width: 390, height: 844 },   // iPhone 14
  { label: "414", width: 414, height: 896 },   // iPhone Plus
];

async function detectOverflow(page, vp) {
  return page.evaluate((vpWidth) => {
    const issues = [];

    // 실제 사용자가 가로 스크롤 가능한지 체크 (overflow-x:hidden이 있으면 false)
    const beforeX = window.scrollX;
    window.scrollBy(10, 0);
    const canScrollX = window.scrollX > beforeX;
    window.scrollBy(-10, 0);
    const docOverflow = canScrollX;

    // 개별 요소 오버플로
    const all = Array.from(document.querySelectorAll("*"));
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      if (rect.right > vpWidth + 2) {
        const tag = el.tagName.toLowerCase();
        const cls = (el.className || "").toString().slice(0, 80);
        const id = el.id ? `#${el.id}` : "";
        issues.push({ tag, cls, id, right: Math.round(rect.right), width: Math.round(rect.width) });
        // 첫 번째 발생만 수집 (같은 클래스 중복 제거)
        if (issues.length >= 15) break;
      }
    }

    return { docOverflow, elements: issues };
  }, vp.width);
}

async function checkInteractions(page, pageName) {
  const results = [];

  // 모바일 메뉴
  try {
    const menuBtn = page.locator('[aria-label*="메뉴"], button[class*="mobile"], button[class*="hamburger"]').first();
    if (await menuBtn.count() > 0) {
      await menuBtn.click({ timeout: 2000 });
      await page.waitForTimeout(400);
      const menuOpen = await page.locator('[role="dialog"], [class*="MobileMenu"], nav[class*="open"]').first().isVisible().catch(() => false);
      results.push({ action: "mobile-menu-open", ok: menuOpen });
      // 닫기
      const closeBtn = page.locator('[aria-label*="닫기"], button[class*="close"]').first();
      if (await closeBtn.count() > 0) await closeBtn.click({ timeout: 1000 }).catch(() => {});
    }
  } catch (_) {}

  // FAQ accordion (faq 페이지)
  if (pageName === "faq") {
    try {
      const acc = page.locator('[data-accordion-item], [class*="accordion"]').first();
      if (await acc.count() > 0) {
        await acc.click({ timeout: 2000 });
        await page.waitForTimeout(300);
        results.push({ action: "faq-accordion-click", ok: true });
      }
    } catch (_) {}
  }

  // Contact form 필드 포커스
  if (pageName === "contact") {
    try {
      const input = page.locator('input[type="text"], input[type="tel"]').first();
      if (await input.count() > 0) {
        await input.focus({ timeout: 2000 });
        const focused = await input.evaluate((el) => el === document.activeElement).catch(() => false);
        results.push({ action: "contact-form-focus", ok: focused });
      }
    } catch (_) {}
  }

  return results;
}

async function checkHeroVisibility(page, vp) {
  // Hero 첫 화면에서 제목과 CTA 버튼이 뷰포트 내에 보이는지 확인
  return page.evaluate((height) => {
    const hero = document.querySelector("section");
    if (!hero) return null;

    const headings = Array.from(hero.querySelectorAll("h1, h2")).slice(0, 1);
    const ctaBtn = hero.querySelector("a[href], button");

    const visible = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { visible: r.top >= 0 && r.bottom <= height, top: Math.round(r.top), bottom: Math.round(r.bottom) };
    };

    return {
      heading: headings[0] ? visible(headings[0]) : null,
      cta: visible(ctaBtn),
    };
  }, vp.height);
}

async function run() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const report = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      isMobile: true,
      hasTouch: true,
    });

    for (const pg of PAGES) {
      const page = await context.newPage();
      const pageReport = { page: pg.name, viewport: vp.label, issues: [], interactions: [], hero: null, errors: [] };

      page.on("pageerror", (e) => pageReport.errors.push(e.message.slice(0, 120)));

      try {
        await page.goto(`${BASE}${pg.path}`, { waitUntil: "networkidle", timeout: 30000 });
        await page.waitForTimeout(800); // 애니메이션 초기 렌더링 대기

        // 스크린샷 (전체 페이지)
        const ssPath = `${OUT}/${pg.name}_${vp.label}.png`;
        await page.screenshot({ path: ssPath, fullPage: true });

        // 오버플로 검출
        const overflow = await detectOverflow(page, vp);
        if (overflow.docOverflow) pageReport.issues.push("⚠ 문서 전체 가로 오버플로");
        if (overflow.elements.length > 0) {
          pageReport.issues.push(...overflow.elements.map((e) => `오버플로 요소: <${e.tag}> .${e.cls.slice(0, 60)} right=${e.right}px`));
        }

        // Hero 가시성
        pageReport.hero = await checkHeroVisibility(page, vp);

        // 인터랙션
        pageReport.interactions = await checkInteractions(page, pg.name);

        // sticky/floating 요소 겹침 검사
        const stickyIssues = await page.evaluate(() => {
          const sticky = Array.from(document.querySelectorAll('[class*="sticky"], [class*="fixed"], [class*="Sticky"], [class*="Floating"]'));
          const issues = [];
          for (const el of sticky) {
            const r = el.getBoundingClientRect();
            if (r.width === 0 || r.height === 0) continue;
            // 다른 sticky와 겹침 여부
            for (const other of sticky) {
              if (el === other) continue;
              const or = other.getBoundingClientRect();
              if (or.width === 0 || or.height === 0) continue;
              const overlap =
                r.left < or.right && r.right > or.left && r.top < or.bottom && r.bottom > or.top;
              if (overlap) {
                issues.push(`겹침: ${el.className.slice(0, 50)} ↔ ${other.className.slice(0, 50)}`);
              }
            }
          }
          return [...new Set(issues)];
        });
        if (stickyIssues.length > 0) pageReport.issues.push(...stickyIssues.map((s) => `고정 요소 겹침: ${s}`));

      } catch (err) {
        pageReport.errors.push(`페이지 로드 실패: ${err.message.slice(0, 100)}`);
      }

      report.push(pageReport);
      await page.close();
      process.stdout.write(`✓ ${pg.name} @ ${vp.label}\n`);
    }

    await context.close();
  }

  await browser.close();
  await writeFile(`${OUT}/report.json`, JSON.stringify(report, null, 2));

  // 콘솔 요약 출력
  console.log("\n========== MOBILE AUDIT REPORT ==========\n");
  for (const r of report) {
    const hasIssues = r.issues.length > 0 || r.errors.length > 0;
    const heroOk = r.hero?.heading?.visible === true && r.hero?.cta?.visible === true;
    const heroNote = r.hero
      ? heroOk
        ? "Hero OK"
        : `Hero주의(heading visible=${r.hero?.heading?.visible}, cta visible=${r.hero?.cta?.visible})`
      : "";

    if (!hasIssues && heroOk) {
      console.log(`✅ [${r.viewport}] ${r.page} — 이슈 없음. ${heroNote}`);
    } else {
      console.log(`\n🔴 [${r.viewport}] ${r.page}`);
      if (heroNote && !heroOk) console.log(`  🖼  ${heroNote}`);
      for (const issue of r.issues) console.log(`  ⚠  ${issue}`);
      for (const err of r.errors) console.log(`  ❌ JS오류: ${err}`);
    }
  }
  console.log("\n스크린샷 저장 위치:", OUT);
  console.log("JSON 리포트:", `${OUT}/report.json`);
}

run().catch((e) => { console.error(e); process.exit(1); });
