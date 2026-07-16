import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { images } from "@/data/site";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New Patients — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Everything new patients need to know about visiting Aurelia Dental — from first consultation to payment options and emergency care." },
      { property: "og:title", content: "New Patients — Aurelia Dental" },
      { property: "og:url", content: "/new-patients" },
    ],
    links: [{ rel: "canonical", href: "/new-patients" }],
  }),
  component: NewPatients,
});

const sections = [
  { title: "What to expect", body: "Your first appointment lasts around 45–60 minutes and includes a full oral health assessment, digital photographs and any necessary imaging. We'll listen carefully to what you'd like and answer questions before recommending anything." },
  { title: "Your first consultation", body: "Consultations are relaxed and unhurried. You are welcome to bring a friend or family member. There is no obligation to proceed with treatment on the day." },
  { title: "Nervous patients", body: "If you have avoided the dentist for a while, please tell us — we'll take extra time, explain each step, and pace the visit around you." },
  { title: "Payment and finance", body: "We accept card and bank transfer, and offer flexible payment plans on many treatments. Details are provided in writing before you agree to any treatment." },
  { title: "Insurance documentation", body: "We are happy to provide receipts and treatment documentation for private health insurers and Med2 claims." },
  { title: "Cancellation policy", body: "We ask for 48 hours' notice for changes or cancellations, so we can offer the appointment to someone else. (Placeholder — confirm with practice before launch.)" },
  { title: "Accessibility", body: "The practice is ground-floor with step-free access. Please let us know in advance of any specific needs so we can prepare." },
  { title: "Emergency appointments", body: "If you are in dental pain or have had an accident, please call the practice on 01 555 0184. We reserve emergency slots each day for our patients." },
];

const faqs = [
  { q: "Do I need a referral?", a: "No — most treatments do not require a referral. You can contact us directly to book a consultation." },
  { q: "How long will I need to wait for an appointment?", a: "New patient consultations are typically available within 1–2 weeks. Emergency appointments are prioritised on the same day where possible." },
  { q: "Do you treat children?", a: "We focus on adult dentistry. We're happy to recommend excellent paediatric practices in the area." },
  { q: "Can I request a specific dentist?", a: "Yes — you can request either Dr Byrne or Dr Walsh when booking. We'll match you to the most suitable clinician for your enquiry." },
];

function NewPatients() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-14 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">New patients</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              A calm welcome, from the very first visit.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-ink/75 leading-relaxed">
              Whether you're joining us for a routine check-up or considering a
              significant treatment, we take the time to make the first visit
              genuinely reassuring.
            </p>
            <div className="mt-8">
              <Link to="/book" className="btn-primary">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-editorial">
          <div className="image-hover aspect-[16/7] bg-bone">
            <img src={images.consultation} alt="A calm consultation in a warm ivory-toned room" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid gap-x-12 gap-y-14 md:grid-cols-2">
          {sections.map((s, i) => (
            <div key={i} className="border-t border-line pt-6">
              <p className="text-xs tracking-[0.18em] uppercase text-sage">0{i + 1}</p>
              <h2 className="font-serif text-2xl md:text-3xl text-ink mt-3">{s.title}</h2>
              <p className="mt-4 text-ink/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-cream border-y border-line">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="display-serif mt-5 text-3xl md:text-4xl text-ink">Questions from new patients.</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
