import HeroSection from "@/components/home/HeroSection";
import ClientLogos from "@/components/home/ClientLogos";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import MarketingProcess from "@/components/home/MarketingProcess";
import CultureSection from "@/components/home/CultureSection";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <WhyChooseUs />
      <ServiceShowcase />
      <PortfolioCarousel />
      <MarketingProcess />
      <CultureSection />
      <ContactForm />
    </>
  );
}
