import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic } from "@/data/site";

export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 backdrop-blur px-4 py-3 flex gap-2 shadow-soft">
      <a href={clinic.phoneHref} aria-label={`Call ${clinic.name}`} className="btn-ghost !py-3 !px-4 shrink-0">
        <Phone className="h-4 w-4" aria-hidden />
      </a>
      <Link to="/book" className="btn-primary flex-1 !py-3">
        Book a Consultation
      </Link>
    </div>
  );
}
