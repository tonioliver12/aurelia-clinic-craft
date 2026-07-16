import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Get in touch with Aurelia Dental. Address, phone, email, opening hours, parking and public transport in Dublin 4." },
      { property: "og:title", content: "Contact Aurelia Dental" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Contact</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              We're happy to hear from you.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-ink/75 leading-relaxed">
              For general enquiries, second opinions or to arrange a visit, please
              use any of the details below. All contact information is placeholder
              demo content — replace before launch.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-editorial grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-10">
            <Detail icon={<MapPin />} label="Visit us">
              <address className="not-italic text-lg text-ink leading-relaxed">
                {clinic.address.line1}<br />
                {clinic.address.line2}<br />
                {clinic.address.country}
              </address>
            </Detail>
            <Detail icon={<Phone />} label="Call">
              <a href={clinic.phoneHref} className="text-lg text-ink hover:text-sage">{clinic.phone}</a>
              <p className="text-xs text-ink/50 mt-2">For dental emergencies during opening hours, please call directly.</p>
            </Detail>
            <Detail icon={<Mail />} label="Email">
              <a href={`mailto:${clinic.email}`} className="text-lg text-ink hover:text-sage">{clinic.email}</a>
            </Detail>
            <Detail icon={<Clock />} label="Opening hours">
              <ul className="mt-2 space-y-1.5 text-ink/80">
                {clinic.hours.map((h) => (
                  <li key={h.day} className="flex justify-between max-w-xs">
                    <span>{h.day}</span>
                    <span className="tabular-nums text-ink/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Detail>

            <div className="border-t border-line pt-8">
              <p className="eyebrow">Getting here</p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 text-sm text-ink/75">
                <div>
                  <p className="font-medium text-ink mb-1">Public transport</p>
                  <p>DART to Grand Canal Dock (8 min walk). Dublin Bus routes 4, 7 and 84 stop nearby.</p>
                </div>
                <div>
                  <p className="font-medium text-ink mb-1">Parking</p>
                  <p>On-street pay-and-display within a short walk. Underground parking available at Merrion Square.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/3] md:aspect-[16/10] bg-sage-soft border border-line grid place-items-center text-ink/40 text-sm">
              Interactive map placeholder — Dublin 4
            </div>
            <div className="mt-12 border-t border-line pt-10">
              <p className="eyebrow">Send a message</p>
              <h2 className="display-serif mt-4 text-3xl md:text-4xl text-ink mb-10">Get in touch</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <div className="flex items-center gap-3 text-sage">
        <span className="h-4 w-4">{icon}</span>
        <span className="text-xs tracking-[0.18em] uppercase">{label}</span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
