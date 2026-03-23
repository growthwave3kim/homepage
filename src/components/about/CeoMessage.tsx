import Image from "next/image";
import { CEO } from "@/data/team";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

export default function CeoMessage() {
  const initials = CEO.name.slice(0, 2);
  const hasImage = !!CEO.image;

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* 왼쪽: 인사말 */}
          <FadeIn direction="left">
            <SectionTitle
              subtitle="CEO Message"
              title="대표 인사말"
              align="left"
            />
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;{CEO.message}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 space-y-3">
              {CEO.philosophy.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-lg font-semibold">{CEO.name}</p>
              <p className="text-sm text-muted-foreground">{CEO.role}</p>
            </div>

            {/* 경력사항 */}
            <div className="mt-10 border-t pt-8">
              <p className="mb-5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Career History
              </p>
              <div className="space-y-5">
                {CEO.career.map((entry) => (
                  <div key={entry.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                        {entry.year}
                      </span>
                      <div className="mt-2 flex-1 border-l border-dashed border-border" />
                    </div>
                    <ul className="space-y-1.5 pb-4">
                      {entry.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 오른쪽: 사진 or 모노그램 */}
          <FadeIn
            direction="right"
            className="flex items-start justify-center lg:sticky lg:top-28"
          >
            {hasImage ? (
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={CEO.image}
                  alt={CEO.name}
                  width={480}
                  height={640}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-16">
                  <p className="text-base font-semibold text-white">
                    {CEO.name}
                  </p>
                  <p className="text-sm text-white/70">GrowthWave · 대표이사</p>
                </div>
              </div>
            ) : (
              <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <span className="text-3xl font-bold tracking-wider text-white/80">
                      {initials}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-white">
                      {CEO.name}
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      GrowthWave · 대표이사
                    </p>
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
