import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Aurelia Dental is a modern, independent private dental practice in Dublin 4. Our philosophy, clinical standards and approach to patient care." },
      { property: "og:title", content: "About Aurelia Dental" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: images.interior },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-14 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              A quietly modern practice with a considered point of view.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-ink/75 leading-relaxed">
              Aurelia Dental is a small, independent Dublin practice built around a
              clear idea — that patients deserve to be listened to, not talked at.
              Everything we do, from the way our rooms are designed to how we plan
              treatment, follows from that.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-editorial">
          <div className="image-hover aspect-[16/8] bg-bone">
            <img src={images.interior} alt="Aurelia Dental reception area" className="h-full w-full object-cover object-left" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="eyebrow">Philosophy</p>
            <h2 className="display-serif mt-4 text-3xl md:text-4xl text-ink">What we believe</h2>
          </div>
          <div className="lg:col-span-8 space-y-8 text-lg text-ink/75 leading-relaxed">
            <p>
              Good dentistry is a long-term relationship. We plan for years — not
              appointments — and we take the time to explain the trade-offs of every
              decision so that you can choose with confidence.
            </p>
            <p>
              We favour minimally invasive approaches, ceramic and composite work
              that respects natural teeth, and treatment sequences that build
              gradually and gently. When a case is not ours to treat, we say so.
            </p>
          </div>
        </div>
      </section>

      <Grid />

      <CTASection
        eyebrow="Visit"
        headline="See the practice for yourself."
        body="You are welcome to arrange a short visit to meet the team and see the clinic before committing to any treatment."
      />
    </>
  );
}

const pillars = [
  { title: "Clinical standards", body: "Continuing professional development, evidence-based practice and cross-infection protocols that exceed regulatory requirements." },
  { title: "Patient-centred care", body: "Longer appointments, honest conversations and no-pressure treatment planning as standard." },
  { title: "A calm environment", body: "Rooms designed to feel more like a considered space than a clinical one — natural light, quiet materials, refined details." },
  { title: "Responsible cosmetics", body: "We say no to treatment that isn't in your best long-term interest. Aesthetic work should support your natural teeth, not compromise them." },
  { title: "Modern technology", body: "Digital scanning, low-dose 3D imaging and guided planning to reduce visits and improve predictability." },
  { title: "Sustainability", body: "We choose suppliers that share our environmental commitments — from packaging to disposable use — and continue to look for meaningful improvements." },
];

function Grid() {
  return (
    <section className="section-y bg-cream border-y border-line">
      <div className="container-editorial">
        <p className="eyebrow">Our pillars</p>
        <h2 className="display-serif mt-5 mb-14 text-4xl md:text-5xl text-ink max-w-2xl">
          Six principles that shape everything we do.
        </h2>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className="border-t border-line pt-6">
              <p className="text-xs tracking-[0.18em] uppercase text-sage">0{i + 1}</p>
              <h3 className="font-serif text-2xl text-ink mt-3">{p.title}</h3>
              <p className="mt-3 text-ink/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
