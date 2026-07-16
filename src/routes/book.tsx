import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic, images } from "@/data/site";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Aurelia Dental, Dublin 4" },
      { name: "description", content: "Request a consultation at Aurelia Dental. Our team will contact you to arrange a suitable time." },
      { property: "og:title", content: "Book a Consultation — Aurelia Dental" },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});

function Book() {
  return (
    <>
      <section className="pt-40 md:pt-52 pb-12">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Book</p>
            <h1 className="display-serif mt-6 text-5xl md:text-7xl lg:text-8xl text-ink">
              Request a consultation.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-ink/75 leading-relaxed">
              Share a few details and our team will be in touch to arrange a
              suitable time. Submitting this form does not confirm an appointment.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center text-sm text-ink/70">
              <a href={clinic.phoneHref} className="link-underline">
                <Phone className="h-4 w-4" aria-hidden /> Or call {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-editorial grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="border-t border-line pt-10">
              <BookingForm />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-32 space-y-8">
            <div className="image-hover aspect-[4/5] bg-bone">
              <img src={images.hero} alt="Aurelia Dental interior" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="border-t border-line pt-6 space-y-4 text-sm text-ink/75">
              <div>
                <p className="eyebrow">What happens next</p>
                <ol className="mt-4 space-y-3">
                  <li>— We'll reply within one working day.</li>
                  <li>— Together we'll agree a suitable time and clinician.</li>
                  <li>— You'll receive a written confirmation before your visit.</li>
                </ol>
              </div>
              <div className="border-t border-line pt-4">
                <p className="eyebrow">Emergency?</p>
                <p className="mt-3">
                  If you are in dental pain, please call{" "}
                  <a href={clinic.phoneHref} className="text-ink underline">{clinic.phone}</a>
                  {" "}directly — we reserve emergency slots each day.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
