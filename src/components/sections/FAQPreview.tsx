import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQPreview() {
	const previewItems = FAQ_ITEMS.slice(0, 4);

	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-3xl">
				<Reveal>
					<div className="mb-10 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							FAQ
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							자주 받는 질문
						</h2>
						<p className="mt-4 text-muted-foreground">나머지는 한 번에 답변드립니다.</p>
					</div>
				</Reveal>

				<Reveal>
					<Accordion className="divide-y divide-slate-100">
						{previewItems.map((item) => (
							<AccordionItem key={item.question} value={item.question} className="border-0">
								<AccordionTrigger className="py-4 text-left font-semibold text-base text-foreground hover:no-underline">
									{item.question}
								</AccordionTrigger>
								<AccordionContent>
									<p className="pb-4 text-muted-foreground text-sm leading-relaxed">
										{item.answer}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Reveal>

				<Reveal>
					<div className="mt-8 text-center">
						<Link
							href="/faq"
							className="inline-flex items-center gap-2 font-semibold text-[#7c3aed] text-sm hover:underline"
						>
							전체 FAQ 보기 →
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
