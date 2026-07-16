import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic } from "@/data/site";

const navLinks = [
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/dentists", label: "Dentists" },
  { to: "/smile-gallery", label: "Smile Gallery" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent py-5 md:py-7"
      }`}
    >
      <div className="container-editorial flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2 shrink-0" aria-label="Aurelia Dental — home">
          <span className="font-serif text-2xl md:text-[1.6rem] tracking-tight text-ink">Aurelia</span>
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-muted-foreground">Dental</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.82rem] tracking-[0.08em] text-ink/80 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={clinic.phoneHref} aria-label={`Call ${clinic.name}`} className="hidden md:inline-flex items-center gap-2 text-[0.82rem] text-ink/80 hover:text-ink transition-colors">
            <Phone className="h-4 w-4" aria-hidden />
            <span className="tabular-nums">{clinic.phone}</span>
          </a>
          <Link to="/book" className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
            Book a Consultation
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ivory transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: scrolled ? 72 : 96 }}
      >
        <div className="container-editorial flex flex-col h-full pb-10">
          <nav className="flex flex-col gap-1 mt-6" aria-label="Mobile primary">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl md:text-4xl py-4 border-b border-line text-ink"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 space-y-3">
            <Link to="/book" onClick={() => setOpen(false)} className="btn-primary w-full">
              Book a Consultation
            </Link>
            <a href={clinic.phoneHref} className="btn-ghost w-full">
              <Phone className="h-4 w-4" aria-hidden /> Call {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
