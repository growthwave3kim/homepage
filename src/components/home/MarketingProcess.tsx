import { MARKETING_PROCESS } from "@/data/services";
import SectionTitle from "@/components/shared/SectionTitle";
import ProcessSteps from "@/components/shared/ProcessSteps";

export default function MarketingProcess() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Process"
          title="마케팅 프로세스"
          description="체계적인 6단계 프로세스로 브랜드의 성장을 이끕니다."
        />
        <ProcessSteps steps={MARKETING_PROCESS} columns={6} />
      </div>
    </section>
  );
}
