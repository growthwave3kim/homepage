import { TEAM_MEMBERS } from "@/data/team";
import SectionTitle from "@/components/shared/SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Our Team"
          title="전문 AE 소개"
          description="평균 4년 이상의 경력을 보유한 전문 AE가 브랜드를 담당합니다."
        />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
