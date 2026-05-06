import Cases from "@/components/sections/Cases";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ProfessionRotator from "@/components/sections/ProfessionRotator";
import ServiceCards from "@/components/sections/ServiceCards";
import TeamPreview from "@/components/sections/TeamPreview";
import Testimonials from "@/components/sections/Testimonials";
import WhyUsBold from "@/components/sections/WhyUsBold";

export default function HomePage() {
	return (
		<>
			<Hero />
			<ProfessionRotator />
			<ServiceCards />
			<ProcessTimeline />
			<Cases />
			<Testimonials />
			<WhyUsBold />
		<TeamPreview />
			<FAQPreview />
			<FinalCTA />
		</>
	);
}
