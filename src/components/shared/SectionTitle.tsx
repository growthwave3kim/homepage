import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <FadeIn
      direction="up"
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      {subtitle && (
        <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
