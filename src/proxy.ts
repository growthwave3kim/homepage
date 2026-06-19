import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// 그로스웨이브 → 온케팅 이전 안내
//
// 모든 경로(/about, /services/*, /team, /faq, /regulation, /contact ...)를
// 이전 안내 페이지(/)로 rewrite 한다. URL은 그대로 두고 안내 페이지 콘텐츠만
// 보여주므로, 구 페이지 본문이 더 이상 노출되지 않는다.
//
// 되돌리려면 이 파일을 삭제하면 끝. (기존 페이지 코드는 그대로 보존됨)
//
// ⚠️ 나중에 온케팅으로 "301 영구 이전"으로 전환할 때는 아래 rewrite 를
//    `NextResponse.redirect(new URL(ONKETING_URL), 308)` 형태로 바꾸면 된다.
// ─────────────────────────────────────────────────────────────────────────────
export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// 안내 페이지(/) 자신은 통과 (rewrite 루프 방지)
	if (pathname === "/") return NextResponse.next();

	return NextResponse.rewrite(new URL("/", request.url));
}

export const config = {
	// 정적 자산·메타데이터 라우트는 제외하고 나머지 모든 경로에 적용
	// (api / _next / opengraph-image / 확장자 있는 파일(robots.txt·sitemap.xml·*.png 등) 제외)
	matcher: ["/((?!api|_next|opengraph-image|.*\\..*).*)"],
};
