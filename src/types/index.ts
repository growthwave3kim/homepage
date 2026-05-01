export interface Stat {
	value: number;
	suffix: string;
	decimals?: number;
	label: string;
}

export interface PainPoint {
	id: string;
	text: string;
}

export interface WhyUsCard {
	icon: string;
	title: string;
	description: string;
}

export interface ComparisonRow {
	general: string;
	growthwave: string;
}

export interface ServiceStep {
	step: number;
	label: string;
}

export interface Service {
	index: string;
	category: string;
	title: string;
	description: string;
	steps: ServiceStep[];
}

export interface Case {
	field: string;
	quote: string;
	metric: string;
	period: string;
	anonymous: string;
	profession?: string;
}

export interface Testimonial {
	text: string;
	author: string;
	role: string;
	profession?: string;
}

export interface TeamMember {
	nameEn: string;
	nameKo: string;
	role: string;
	bio: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface NavChild {
	label: string;
	href: string;
	description: string;
	icon: string;
	flagship?: boolean;
}

export type NavItem =
	| { label: string; href: string; children?: undefined }
	| { label: string; href: string; matchPrefix?: string; children: NavChild[] };
