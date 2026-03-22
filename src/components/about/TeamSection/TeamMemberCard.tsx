import type { TeamMember } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <div className="flex h-full items-center justify-center text-muted-foreground transition-transform duration-500 group-hover:scale-105">
          <div className="text-center">
            <p className="text-5xl font-bold opacity-20">AE</p>
            <p className="mt-2 text-sm">{member.name}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <Badge variant="secondary">{member.title}</Badge>
        </div>
        <p className="mb-3 text-sm text-muted-foreground">{member.role}</p>
        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
          <Quote className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed italic text-muted-foreground">
            {member.quote}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {member.description}
        </p>
      </div>
    </div>
  );
}
