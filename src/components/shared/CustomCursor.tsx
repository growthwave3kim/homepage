"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // 터치 기기에서 숨김
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsTouch(false);

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    // rAF로 부드럽게 따라오기
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* 커서 */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{ left: "-200px", top: "-200px" }}
      >
        <div
          className="flex items-center justify-center overflow-hidden rounded-full bg-[oklch(0.10_0.025_265)] transition-transform duration-200"
          style={{
            width: clicking ? 36 : 44,
            height: clicking ? 36 : 44,
            boxShadow: "0 0 20px 2px oklch(0.65 0.18 175 / 0.3), 0 0 1px 1px oklch(0.65 0.18 175 / 0.2)",
            transition: "width 0.2s ease, height 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          <Image
            src="/images/logo.jpg"
            alt=""
            width={34}
            height={34}
            className="object-contain"
            style={{
              width: clicking ? 28 : 34,
              height: clicking ? 28 : 34,
              filter: "drop-shadow(0 0 6px oklch(0.65 0.18 175 / 0.7))",
              transition: "width 0.2s ease, height 0.2s ease",
            }}
          />
        </div>
      </div>

      {/* 기본 커서 숨김 */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
