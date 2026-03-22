import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import MarketingProcess from "@/components/home/MarketingProcess";
import ContactForm from "@/components/shared/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <PortfolioCarousel />
      <MarketingProcess />
      <ContactForm />
    </>
  );
}
