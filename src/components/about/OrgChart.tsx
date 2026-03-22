import { ORG_STRUCTURE } from "@/data/team";
import SectionTitle from "@/components/shared/SectionTitle";

export default function OrgChart() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Organization"
          title="조직 구성"
          description="전문성과 효율성을 갖춘 조직 구조로 최적의 결과를 만들어냅니다."
        />

        <div className="mx-auto max-w-4xl">
          {/* CEO */}
          <div className="flex justify-center">
            <div className="rounded-xl bg-primary px-8 py-4 text-center text-primary-foreground">
              <p className="text-sm font-medium">CEO / Founder</p>
              <p className="text-lg font-bold">대표이사</p>
            </div>
          </div>

          {/* Connector */}
          <div className="mx-auto h-8 w-px bg-border" />

          {/* Departments */}
          <div className="grid gap-8 lg:grid-cols-2">
            {ORG_STRUCTURE.departments.map((dept) => (
              <div key={dept.name}>
                <div className="flex justify-center">
                  <div className="rounded-xl border-2 border-primary bg-card px-8 py-4 text-center">
                    <p className="text-lg font-bold">{dept.name}</p>
                  </div>
                </div>

                {/* Connector */}
                <div className="mx-auto h-6 w-px bg-border" />

                {/* Teams */}
                <div className="grid gap-3 sm:grid-cols-3">
                  {dept.teams.map((team) => (
                    <div
                      key={team}
                      className="rounded-xl border bg-card p-4 text-center transition-all hover:shadow-md"
                    >
                      <p className="text-sm font-medium">{team}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
