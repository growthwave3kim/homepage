import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceProcess from "@/components/services/ServiceProcess";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const service = SERVICES.find((s) => s.id === "influencer")!;

export const metadata: Metadata = {
  title: "인플루언서 마케팅",
  description: service.description,
};

export default function InfluencerServicePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
      />
      {service.stats && <ServiceStats stats={service.stats} />}
      {service.features && <ServiceFeatures features={service.features} />}
      {service.process && <ServiceProcess steps={service.process} />}
      <ContactForm />
    </div>
  );
}
