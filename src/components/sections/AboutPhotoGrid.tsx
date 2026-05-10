import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

type PhotoSlot = {
	src: string;
	alt: string;
	ready: boolean;
};

const PHOTOS: PhotoSlot[] = [
	{ src: "/images/about/office-main.jpg", alt: "그로스웨이브 사무실", ready: false },
	{ src: "/images/about/team-work.jpg", alt: "팀 작업 모습", ready: false },
	{ src: "/images/about/meeting.jpg", alt: "미팅 장면", ready: false },
	{ src: "/images/about/desk.jpg", alt: "업무 환경", ready: false },
];

const PhotoPlaceholder = ({ label }: { label: string }) => (
	<div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 bg-slate-100">
		<svg
			className="h-8 w-8 text-slate-300"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
			/>
		</svg>
		<p className="font-mono text-slate-400 text-[10px] tracking-widest">{label}</p>
	</div>
);

export const AboutPhotoGrid = () => {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Our Space
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						팀과 <span className="gradient-text">공간</span>
					</h2>
				</Reveal>

				{/* Bento grid: 큰 사진 + 3개 */}
				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					{/* 메인 큰 사진 — 2행 */}
					<Reveal className="col-span-2 row-span-2 overflow-hidden rounded-2xl md:col-span-1">
						<div className="relative h-full min-h-[320px]">
							{PHOTOS[0].ready ? (
								<Image
									src={PHOTOS[0].src}
									alt={PHOTOS[0].alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							) : (
								<PhotoPlaceholder label="office-main.jpg" />
							)}
						</div>
					</Reveal>

					{/* 우측 상단 */}
					<Reveal delay={0.1} className="overflow-hidden rounded-2xl">
						<div className="relative aspect-[4/3]">
							{PHOTOS[1].ready ? (
								<Image
									src={PHOTOS[1].src}
									alt={PHOTOS[1].alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 50vw, 33vw"
								/>
							) : (
								<PhotoPlaceholder label="team-work.jpg" />
							)}
						</div>
					</Reveal>

					{/* 우측 중단 */}
					<Reveal delay={0.15} className="overflow-hidden rounded-2xl">
						<div className="relative aspect-[4/3]">
							{PHOTOS[2].ready ? (
								<Image
									src={PHOTOS[2].src}
									alt={PHOTOS[2].alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 50vw, 33vw"
								/>
							) : (
								<PhotoPlaceholder label="meeting.jpg" />
							)}
						</div>
					</Reveal>

					{/* 하단 와이드 */}
					<Reveal delay={0.2} className="col-span-2 overflow-hidden rounded-2xl md:col-span-2">
						<div className="relative aspect-[16/7]">
							{PHOTOS[3].ready ? (
								<Image
									src={PHOTOS[3].src}
									alt={PHOTOS[3].alt}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 66vw"
								/>
							) : (
								<PhotoPlaceholder label="desk.jpg" />
							)}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
