"use client";

import { Reveal } from "@/components/shared/Reveal";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/data/faq";

const CATEGORY_IDS: Record<string, string> = {
	비용: "faq-cost",
	기간·계약: "faq-contract",
	규정: "faq-regulation",
	성과: "faq-results",
	채널: "faq-channel",
};

export const FAQ = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-3xl">
				{FAQ_CATEGORIES.map((cat) => {
					const items = FAQ_ITEMS.filter((item) => item.category === cat);
					if (items.length === 0) return null;
					return (
						<div key={cat} id={CATEGORY_IDS[cat]} className="mb-12 scroll-mt-28">
							<Reveal>
								<p className="mb-5 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
									{cat}
								</p>
								<Accordion>
									{items.map((item, i) => (
										<AccordionItem key={item.question} value={`${cat}-${i}`}>
											<AccordionTrigger className="py-5 text-left font-semibold text-[15px] text-foreground hover:no-underline">
												{item.question}
											</AccordionTrigger>
											<AccordionContent className="break-keep pb-5 text-muted-foreground text-sm leading-relaxed">
												{item.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</Reveal>
						</div>
					);
				})}
			</div>
		</section>
	);
};
