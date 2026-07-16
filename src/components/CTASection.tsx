import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic } from "@/data/site";

type Props = {
  eyebrow?: string;
  headline?: string;
  body?: string;
};

export function CTASection({
  eyebrow = "Begin",
  headline = "Your next step can be a simple conversation.",
  body = "Tell us what you would like to improve, or simply book a general consultation. Our team will help you understand the options without pressure.",
}: Props) {
  return (
    <section className="section-y bg-cream border-y border-line">
      <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-serif mt-5 text-4xl md:text-6xl lg:text-7xl text-ink max-w-3xl">
            {headline}
          </h2>
          <p className="mt-8 max-w-xl text-ink/70 leading-relaxed text-lg">{body}</p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
          <Link to="/book" className="btn-primary">Book a Consultation</Link>
          <a href={clinic.phoneHref} className="btn-ghost">
            <Phone className="h-4 w-4" aria-hidden /> Call {clinic.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
