import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
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
    </div>
  );
}
