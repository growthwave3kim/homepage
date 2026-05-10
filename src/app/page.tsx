import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProfessionRotator } from "@/components/sections/ProfessionRotator";
import { RealReviews } from "@/components/sections/RealReviews";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { StatBlock } from "@/components/sections/StatBlock";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { WhyUsBold } from "@/components/sections/WhyUsBold";

export const HomePage = () => {
	return (
		<>
			<Hero />
			<PainPoints />
			<ProfessionRotator />
			<WhyUsBold />
			<ServiceCards />
			<ProcessSteps />
			<StatBlock />
			<RealReviews />
			<TeamPreview />
			<FinalCTA />
		</>
	);
};

export default HomePage;
