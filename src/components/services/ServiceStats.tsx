import type { Stat } from "@/types";
import FadeIn from "@/components/shared/FadeIn";

interface ServiceStatsProps {
  stats: Stat[];
}

export default function ServiceStats({ stats }: ServiceStatsProps) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.13_0.022_265)] py-14 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,oklch(0.36_0.09_265/0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-0 divide-x divide-white/[0.06] lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100} direction="up">
              <div className="px-8 py-6 text-center">
                <p className="text-3xl font-bold text-white lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium tracking-widest text-white/35 uppercase">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
