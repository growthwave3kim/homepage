"use client";

import Reveal from "@/components/shared/Reveal";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQ() {
	return (
		<section id="faq" className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-3xl">
				<Reveal delay={0.1}>
					<Accordion>
						{FAQ_ITEMS.map((item, i) => (
							<AccordionItem key={item.question} value={`item-${i}`}>
								<AccordionTrigger className="py-5 text-left font-semibold text-[15px] text-foreground hover:no-underline">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="pb-5 text-muted-foreground text-sm leading-relaxed">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Reveal>
			</div>
		</section>
	);
}
