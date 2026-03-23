import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceStrengths from "@/components/services/ServiceStrengths";
import ServiceIndustryResults from "@/components/services/ServiceIndustryResults";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const service = SERVICES.find((s) => s.id === "influencer")!;

export const metadata: Metadata = {
  title: "인플루언서 마케팅",
  description: service.description,
};

export default function InfluencerServicePage() {
  return (
    <div>
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
      />
      <ServiceStrengths />
      {service.features && <ServiceFeatures features={service.features} />}
      <ServiceIndustryResults />
      {service.process && <ServiceProcess steps={service.process} />}
      <ContactForm />
    </div>
  );
}
