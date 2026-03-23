import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceProjectShowcase from "@/components/services/ServiceProjectShowcase";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const service = SERVICES.find((s) => s.id === "homepage")!;

export const metadata: Metadata = {
  title: "웹사이트 제작",
  description: service.description,
};

export default function HomepageServicePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
      />
      <ServiceProjectShowcase />
      {service.features && <ServiceFeatures features={service.features} />}
      {service.process && <ServiceProcess steps={service.process} />}
      <ContactForm />
    </div>
  );
}
