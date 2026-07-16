import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { reviews, clinic } from "@/data/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Read patient reviews of Aurelia Dental — a private dental practice in Dublin 4 with a 4.9 Google rating." },
      { property: "og:title", content: "Patient Reviews — Aurelia Dental" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Patient reviews</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              The experience patients remember.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-sage text-sage" aria-hidden />
              ))}
            </div>
            <p className="mt-3 text-ink/70">
              <span className="font-medium text-ink">{clinic.rating.score}</span> average · {clinic.rating.count}+ Google reviews
            </p>
          </div>
        </div>
        <div className="container-editorial mt-8">
          <p className="text-xs text-ink/50 max-w-2xl">
            Note: the testimonials below are demonstration content and should be replaced
            with verified patient reviews before launch.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-editorial">
          <div className="grid gap-12 md:grid-cols-2">
            {reviews.map((r, i) => (
              <blockquote key={i} className={`border-t border-line pt-8 ${i % 2 === 1 ? "md:mt-12" : ""}`}>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-sage text-sage" aria-hidden />
                  ))}
                </div>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-ink">"{r.quote}"</p>
                <footer className="mt-8 flex justify-between gap-4 text-sm text-ink/60">
                  <span className="font-medium text-ink">{r.name}</span>
                  {r.treatment && <span>{r.treatment} · Google</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
