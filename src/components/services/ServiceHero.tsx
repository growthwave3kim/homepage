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
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="mb-3 text-sm font-medium tracking-widest text-primary-foreground/70 uppercase">
          {subtitle}
        </p>
        <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
