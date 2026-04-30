import Cases from "@/components/sections/Cases";
import ClientLogos from "@/components/sections/ClientLogos";
import Comparison from "@/components/sections/Comparison";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
import PainPoints from "@/components/sections/PainPoints";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import WhyUs from "@/components/sections/WhyUs";

export default function HomePage() {
	return (
		<>
			<Hero />
			<ClientLogos />
			<Numbers />
			<PainPoints />
			<WhyUs />
			<Comparison />
			<Services />
			<Cases />
			<VideoTestimonials />
			<Testimonials />
			<Team />
			<Contact />
			<FAQ />
			<CTA />
		</>
	);
}
