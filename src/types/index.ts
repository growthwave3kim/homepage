export type PainPoint = {
	id: string;
	text: string;
};

export type WhyUsCard = {
	icon: string;
	title: string;
	description: string;
};

export type ComparisonRow = {
	general: string;
	growthwave: string;
};

export type ServiceStep = {
	step: number;
	label: string;
};

export type Service = {
	index: string;
	category: string;
	title: string;
	description: string;
	steps: ServiceStep[];
};

export type Case = {
	field: string;
	quote: string;
	metric: string;
	period: string;
	anonymous: string;
	profession?: string;
};

export type Testimonial = {
	text: string;
	author: string;
	role: string;
	profession?: string;
};

export type TeamMember = {
	nameEn: string;
	nameKo: string;
	role: string;
	bio: string;
	quote?: string;
	careers?: string[];
	photo?: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export type NavChild = {
	label: string;
	href: string;
	description: string;
	icon: string;
	flagship?: boolean;
};

export type NavItem =
	| { label: string; href: string; children?: undefined }
	| { label: string; href: string; matchPrefix?: string; children: NavChild[] };
