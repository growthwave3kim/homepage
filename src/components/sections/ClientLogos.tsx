const LOGOS = [
	"A 법무법인",
	"B 변호사",
	"C 법률사무소",
	"D 합동법률사무소",
	"E 법무법인",
	"F 변호사",
	"G 법률사무소",
	"H 법무법인",
	"I 변호사",
	"J 법무법인",
];

const MARQUEE_ITEMS = ["a", "b"].flatMap((copy) =>
	LOGOS.map((logo) => ({ key: `${logo}-${copy}`, logo })),
);

export default function ClientLogos() {
	return (
		<section className="overflow-hidden bg-slate-50 py-10">
			<p className="mb-6 text-center font-medium text-slate-400 text-xs uppercase tracking-[0.3em]">
				함께한 법무법인
			</p>
			<div className="relative flex">
				<div
					className="flex whitespace-nowrap"
					style={{ animation: "marquee 28s linear infinite" }}
				>
					{MARQUEE_ITEMS.map(({ key, logo }) => (
						<span key={key} className="mx-10 font-medium text-slate-300 text-sm tracking-wide">
							{logo}
						</span>
					))}
				</div>
			</div>
			<style>{`
				@keyframes marquee {
					from { transform: translateX(0); }
					to { transform: translateX(-50%); }
				}
			`}</style>
		</section>
	);
}
