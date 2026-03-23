import { Check } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

interface ServiceFeaturesProps {
  features: string[];
  title?: string;
}

export default function ServiceFeatures({
  features,
  title = "주요 특징",
}: ServiceFeaturesProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle subtitle="Features" title={title} />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <FadeIn key={feature} delay={i * 70} direction="up">
              <div className="group flex items-center gap-4 rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_8px_32px_oklch(0.22_0.035_265/0.08)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
