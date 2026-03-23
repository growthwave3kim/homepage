import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenTool, Instagram, Users, Monitor } from "lucide-react";
import { SERVICES, MARKETING_PROCESS } from "@/data/services";
import SectionTitle from "@/components/shared/SectionTitle";
import ProcessSteps from "@/components/shared/ProcessSteps";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "서비스소개",
  description:
    "콘텐츠 마케팅, 소셜 미디어, 인플루언서 마케팅, 웹사이트 제작 — GrowthWave의 서비스를 소개합니다.",
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "pen-tool": PenTool,
  instagram: Instagram,
  users: Users,
  monitor: Monitor,
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-primary-foreground/70 uppercase">
            Our Services
          </p>
          <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            서비스 소개
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
            브랜드의 성장 단계에 맞춘 최적의 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                  </div>
                  <h2 className="mb-1 text-xl font-bold">{service.title}</h2>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {service.subtitle}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    자세히 보기
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            subtitle="Process"
            title="마케팅 프로세스"
            description="체계적인 6단계 프로세스로 브랜드의 성장을 이끕니다."
          />
          <ProcessSteps steps={MARKETING_PROCESS} columns={6} />
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
