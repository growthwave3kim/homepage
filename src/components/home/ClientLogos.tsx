import FadeIn from "@/components/shared/FadeIn";

const ROW1 = [
  "바비톡", "㈜드림어스컴퍼니 FLO", "㈜NHN KCP", "㈜비상교육",
  "아이비김영", "브라운편입", "대교 차이홍", "나눔축산운동본부",
];
const ROW2 = [
  "MAISON BLANC", "ATELIER NOIR", "VERRE", "ONUL",
  "루미에르뷰티", "커넥트패션", "한국패션산업협회", "그린테이블",
];

function LogoItem({ name }: { name: string }) {
  return (
    <span className="mx-10 inline-flex items-center gap-3 whitespace-nowrap">
      <span className="h-1 w-1 rounded-full bg-current opacity-30" />
      <span className="text-sm font-medium tracking-wider">{name}</span>
    </span>
  );
}

export default function ClientLogos() {
  return (
    <section className="overflow-hidden border-y bg-muted/20 py-14">
      <FadeIn direction="up">
        <p className="mb-8 text-center text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
          Trusted by leading brands
        </p>
      </FadeIn>

      {/* Row 1 — 왼쪽으로 */}
      <div className="relative mb-4">
        <div className="animate-marquee flex text-foreground/40">
          {[...ROW1, ...ROW1, ...ROW1].map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — 오른쪽으로 */}
      <div className="relative">
        <div className="animate-marquee-rev flex text-foreground/40">
          {[...ROW2, ...ROW2, ...ROW2].map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
