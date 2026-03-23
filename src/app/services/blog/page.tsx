import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceStats from "@/components/services/ServiceStats";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCustomerJourney from "@/components/services/ServiceCustomerJourney";
import ServiceReviews from "@/components/services/ServiceReviews";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

const service = SERVICES.find((s) => s.id === "blog")!;

export const metadata: Metadata = {
  title: "콘텐츠 마케팅",
  description: service.description,
};

export default function BlogServicePage() {
  return (
    <div className="pt-16 lg:pt-20">
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
      />
      {service.stats && <ServiceStats stats={service.stats} />}
      <ServiceCustomerJourney />
      {service.features && <ServiceFeatures features={service.features} />}
      {service.process && <ServiceProcess steps={service.process} />}
      <ServiceReviews />
      <ContactForm />
    </div>
  );
}
