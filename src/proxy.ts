import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// 그로스웨이브 → 온케팅 301 영구 이전 (site move)
//
// 구 사이트(growthwave.co.kr)의 모든 경로를 동일 경로의 온케팅으로 301 영구
// 리다이렉트한다. onketing.kr 가 동일 구조(/about, /services/*, /faq, /contact ...)라
// 1:1 매핑이 가능하다.
//
// 효과:
// - growthwave.co.kr 접속 → 즉시 onketing.kr 같은 경로로 이동
// - 그로스웨이브가 쌓은 검색 점수(권위)를 온케팅이 승계 → "온케팅" 검색에서 온케팅이 상위로
// - 구글·네이버가 재방문해 301을 읽으면 그로스웨이브 결과는 온케팅으로 교체됨
//
// 되돌리려면: 이 파일을 NextResponse.rewrite(new URL("/", request.url)) 형태(안내 페이지)
// 또는 삭제로 변경. (단, 301은 브라우저에 캐시되므로 이미 방문한 기기는 한동안 이동됨)
// ─────────────────────────────────────────────────────────────────────────────
const ONKETING_ORIGIN = "https://www.onketing.kr";

export function proxy(request: NextRequest) {
	const { pathname, search } = request.nextUrl;
	return NextResponse.redirect(new URL(`${pathname}${search}`, ONKETING_ORIGIN), 301);
}

export const config = {
	// 정적 자산·메타데이터 라우트는 제외하고 나머지 모든 경로에 적용
	matcher: ["/((?!api|_next|opengraph-image|.*\\..*).*)"],
};
