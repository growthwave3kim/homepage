import { CEO } from "@/data/team";
import SectionTitle from "@/components/shared/SectionTitle";

export default function CeoMessage() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              subtitle="CEO Message"
              title="대표 인사말"
              align="left"
            />
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                &ldquo;{CEO.message}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 space-y-3">
              {CEO.philosophy.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-lg font-semibold">{CEO.name}</p>
              <p className="text-sm text-muted-foreground">{CEO.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-6xl font-bold opacity-20">CEO</p>
                  <p className="mt-2 text-sm">대표이사 {CEO.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
