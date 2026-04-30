import type { KnipConfig } from "knip";

const config: KnipConfig = {
	// Next.js 플러그인이 app/ 라우트(page, layout, error, loading 등)를 자동 인식
	entry: [
		"src/app/**/*.{ts,tsx}",
		"src/components/dashboard/**/*.{ts,tsx}",
		"src/components/layout/**/*.{ts,tsx}",
		"src/lib/**/*.ts",
		"src/data/**/*.ts",
		"src/providers/**/*.{ts,tsx}",
		"src/types/**/*.ts",
	],

	// shadcn/ui — pnpx shadcn으로 관리. knip 분석 대상 제외
	ignore: ["src/components/ui/**"],

	ignoreDependencies: [
		// CLI 도구 — import 없이 pnpx로만 사용
		"shadcn",
		// @tailwindcss/postcss의 peer dependency — 직접 import 없이 PostCSS가 내부 참조
		"postcss",
	],

	// 파일 내부에서만 사용하는 export는 오탐 제외
	ignoreExportsUsedInFile: true,
};

export default config;
