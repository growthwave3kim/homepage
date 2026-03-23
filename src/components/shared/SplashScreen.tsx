"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("gw_splash");
    if (shown) return;

    setVisible(true);

    const leaveTimer = setTimeout(() => setLeaving(true), 2400);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("gw_splash", "1");
    }, 3000);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[oklch(0.09_0.025_265)]"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* 배경 오브 */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.18_175/0.08),transparent_65%)] blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.15_230/0.08),transparent_65%)] blur-[80px]" />

      {/* 로고 + 텍스트 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 로고 */}
        <div
          className="mb-8"
          style={{ animation: "fade-up 0.8s ease 0.1s both" }}
        >
          <div
            className="relative flex h-28 w-28 items-center justify-center rounded-3xl"
            style={{
              boxShadow:
                "0 0 60px 8px oklch(0.65 0.18 175 / 0.35), 0 0 120px 20px oklch(0.45 0.15 230 / 0.20)",
            }}
          >
            {/* 글로우 링 */}
            <div className="absolute inset-0 animate-ping rounded-3xl bg-[oklch(0.65_0.18_175/0.08)]" style={{animationDuration: '2s'}} />
            <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-br from-[oklch(0.65_0.18_175/0.4)] via-transparent to-[oklch(0.45_0.15_230/0.4)]" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-[oklch(0.14_0.025_265)]">
              <Image
                src="/images/logo.jpg"
                alt="GrowthWave"
                width={96}
                height={96}
                className="h-20 w-20 object-contain"
                style={{ filter: "drop-shadow(0 0 12px oklch(0.65 0.18 175 / 0.8))" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* 브랜드명 */}
        <div style={{ animation: "fade-up 0.8s ease 0.35s both" }}>
          <h1 className="text-center text-3xl font-bold tracking-[0.35em] text-white uppercase md:text-4xl">
            Growth
            <span
              style={{
                background: "linear-gradient(90deg, oklch(0.75 0.18 175), oklch(0.60 0.20 220))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Wave
            </span>
          </h1>
        </div>

        {/* 태그라인 */}
        <p
          className="mt-4 text-xs font-medium tracking-[0.4em] text-white/30 uppercase"
          style={{ animation: "fade-up 0.8s ease 0.55s both" }}
        >
          Digital Growth Partner
        </p>

        {/* 로딩 바 */}
        <div
          className="mt-12 h-px w-40 overflow-hidden rounded-full bg-white/10"
          style={{ animation: "fade-in 0.6s ease 0.7s both" }}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[oklch(0.65_0.18_175)] to-[oklch(0.45_0.15_230)]"
            style={{ animation: "shimmer-load 1.8s ease 0.8s forwards", width: 0 }}
          />
        </div>
      </div>

      <style>{`
        @keyframes shimmer-load {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
