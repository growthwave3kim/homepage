import Link from "next/link";
import {
  PenTool,
  Instagram,
  Users,
  Monitor,
  Layout,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { SERVICE_OVERVIEW } from "@/data/services";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "pen-tool": PenTool,
  instagram: Instagram,
  users: Users,
  monitor: Monitor,
  layout: Layout,
  "bar-chart": BarChart,
};

const HREF_MAP: Record<string, string> = {
  "콘텐츠 마케팅": "/services/blog",
  "소셜 미디어": "/services/instagram",
  인플루언서: "/services/influencer",
  "웹사이트 제작": "/services/homepage",
  "퍼포먼스 광고": "/services",
  "통합 브랜딩": "/services",
};

export default function ServicesOverview() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Our Services"
          title="서비스"
          description="브랜드의 성장 단계에 맞춘 최적의 솔루션을 제공합니다."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_OVERVIEW.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const href = HREF_MAP[service.title] || "/services";

            return (
              <FadeIn key={service.title} delay={i * 80} direction="up">
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    자세히 보기
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
