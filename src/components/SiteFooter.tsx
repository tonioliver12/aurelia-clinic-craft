import { Link } from "@tanstack/react-router";
import { clinic } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-editorial pt-20 md:pt-28 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Aurelia</span>
              <span className="text-[0.65rem] tracking-[0.28em] uppercase text-ivory/60">Dental</span>
            </div>
            <p className="mt-6 max-w-md text-ivory/70 leading-relaxed">
              A modern private dental practice in Dublin 4. Considered clinical care,
              natural-looking results and a calmer kind of patient experience.
            </p>
            <div className="mt-8">
              <Link to="/book" className="btn-on-dark">Book a Consultation</Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-ivory/50">Visit</p>
            <address className="not-italic mt-4 text-ivory/80 leading-relaxed text-sm">
              {clinic.address.line1}<br />
              {clinic.address.line2}<br />
              {clinic.address.country}
            </address>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-ivory/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              <li><a href={clinic.phoneHref} className="hover:text-ivory">{clinic.phone}</a></li>
              <li><a href={`mailto:${clinic.email}`} className="hover:text-ivory">{clinic.email}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow !text-ivory/50">Hours</p>
            <ul className="mt-4 space-y-1.5 text-sm text-ivory/80">
              {clinic.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="tabular-nums text-ivory/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} {clinic.name}. All rights reserved. Fictional demo content.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/new-patients" className="hover:text-ivory">New Patients</Link>
            <Link to="/contact" className="hover:text-ivory">Contact</Link>
            <span>Privacy — demo</span>
            <span>Complaints — demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
