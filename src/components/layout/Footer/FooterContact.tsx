import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">연락처</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{COMPANY_INFO.address}</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0" />
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="transition-colors hover:text-foreground"
          >
            {COMPANY_INFO.phone}
          </a>
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 shrink-0" />
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="transition-colors hover:text-foreground"
          >
            {COMPANY_INFO.email}
          </a>
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" />
          <span>{COMPANY_INFO.hours}</span>
        </li>
      </ul>
    </div>
  );
}
