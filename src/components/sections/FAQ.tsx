"use client";

import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQ() {
	return (
		<section id="faq" className="bg-white px-4 py-24">
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<SectionHeading eyebrow="FAQ" title="자주 묻는 질문" className="mb-16" />
				</Reveal>

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

				<Reveal delay={0.2}>
					<div className="mt-12 rounded-2xl bg-slate-50 p-7 text-center">
						<p className="font-semibold text-base text-foreground">다른 궁금한 점이 있으신가요?</p>
						<p className="mt-1 text-muted-foreground text-sm">
							상담은 무료이며, 진행 의무가 없습니다.
						</p>
						<button
							type="button"
							onClick={() =>
								document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
							}
							className="gradient-brand mt-4 inline-block rounded-full px-6 py-2.5 font-semibold text-sm text-white transition-opacity hover:opacity-90"
						>
							무료 상담 신청
						</button>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
