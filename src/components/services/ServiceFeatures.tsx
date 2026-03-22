import { CheckCircle } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

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
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border bg-card p-5 transition-all hover:shadow-md"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
