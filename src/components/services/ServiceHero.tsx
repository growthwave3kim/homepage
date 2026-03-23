interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] pb-28 pt-44 lg:pb-36 lg:pt-52">
      {/* 오브 */}
      <div className="animate-float absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.36_0.09_265/0.35),transparent_65%)] blur-[80px]" />
      <div className="animate-float-d1 absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.30_0.07_280/0.28),transparent_65%)] blur-[70px]" />

      {/* 격자 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 대각선 데코 */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="mb-4 animate-fade-up text-xs font-medium tracking-[0.4em] text-white/40 uppercase">
          {subtitle}
        </p>
        <h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          style={{ animation: "fade-up 0.7s ease 0.1s both" }}
        >
          {title}
        </h1>
        <div className="mx-auto mb-8 h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ animation: "fade-in 0.7s ease 0.2s both" }} />
        <p
          className="mx-auto max-w-2xl text-base leading-relaxed text-white/50 lg:text-lg"
          style={{ animation: "fade-up 0.7s ease 0.25s both" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
