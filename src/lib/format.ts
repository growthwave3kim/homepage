export function fmtPct(n: number | null | undefined): string {
	if (n == null) return "—";
	const sign = n >= 0 ? "+" : "";
	return `${sign}${n.toFixed(2)}%`;
}

export function fmtPrice(n: number | null | undefined): string {
	if (n == null) return "—";
	return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function fmtVolume(n: number | null | undefined): string {
	if (n == null) return "—";
	if (n >= 1e12) return `${(n / 1e12).toFixed(1)}T`;
	if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
	if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
	return String(Math.round(n));
}

export function fmtKrw(n: number | null | undefined): string {
	if (n == null) return "—";
	if (n >= 1e12) return `${(n / 1e12).toFixed(1)}조`;
	if (n >= 1e8) return `${(n / 1e8).toFixed(0)}억`;
	if (n >= 1e4) return `${(n / 1e4).toFixed(0)}만`;
	return String(Math.round(n));
}

export function fmtAge(iso: string): string {
	const diff = Date.now() - new Date(iso).getTime();
	const m = Math.floor(diff / 60000);
	if (m < 1) return "방금";
	if (m < 60) return `${m}분 전`;
	const h = Math.floor(m / 60);
	if (h < 24) return `${h}시간 전`;
	return `${Math.floor(h / 24)}일 전`;
}

export function pctClass(n: number | null | undefined): string {
	if (n == null) return "text-neu";
	if (n > 0) return "text-up";
	if (n < 0) return "text-down";
	return "text-neu";
}
