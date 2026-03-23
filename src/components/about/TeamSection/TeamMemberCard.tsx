import type { TeamMember } from "@/types";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const CARD_GRADIENTS = [
  "from-slate-700 via-slate-600 to-slate-500",
  "from-zinc-800 via-zinc-700 to-stone-600",
];

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const initials = member.name
    .split("")
    .filter((_, i) => i === 0 || i === 1)
    .join("");

  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
      <div className={`aspect-square bg-gradient-to-br ${gradient}`}>
        <div className="flex h-full flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:scale-105">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <span className="text-2xl font-bold tracking-wider text-white/80">
              {initials}
            </span>
          </div>
          <p className="text-sm font-medium text-white/60">{member.role}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <Badge variant="secondary">{member.title}</Badge>
        </div>
        <p className="mb-3 text-sm text-muted-foreground">{member.role}</p>
        <div className="border-l-2 border-primary/30 pl-4">
          <p className="text-sm leading-relaxed italic text-muted-foreground">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {member.description}
        </p>
      </div>
    </div>
  );
}
