import type { Metadata } from "next";
import SectionTitle from "@/components/shared/SectionTitle";
import FaqList from "@/components/faq/FaqList";

export const metadata: Metadata = {
  title: "FAQ",
  description: "GrowthWave 서비스에 대해 자주 묻는 질문과 답변을 확인하세요.",
};

export default function FaqPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="자주 묻는 질문"
            description="서비스에 대해 궁금한 점을 확인해보세요."
          />
          <FaqList />
        </div>
      </section>
    </div>
  );
}
