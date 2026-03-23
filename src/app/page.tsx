import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import MarketingProcess from "@/components/home/MarketingProcess";
import EarlyBird from "@/components/home/EarlyBird";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServiceShowcase />
      <MarketingProcess />
      <EarlyBird />
      <ContactForm />
    </>
  );
}
