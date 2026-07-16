import { useState, type FormEvent } from "react";
import { treatments } from "@/data/site";
import { Check } from "lucide-react";

const inputBase =
  "w-full bg-transparent border-0 border-b border-line pt-6 pb-2 text-ink placeholder-transparent focus:outline-none focus:border-ink transition-colors peer";
const labelBase =
  "absolute left-0 top-6 text-ink/50 text-sm transition-all pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    contact: "email",
    day: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo submit — replace with real backend integration.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-line bg-cream p-10 md:p-14 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-sage/15 text-sage grid place-items-center">
          <Check className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="mt-6 font-serif text-3xl md:text-4xl text-ink">Thank you — we've received your enquiry.</h3>
        <p className="mt-4 max-w-xl mx-auto text-ink/70 leading-relaxed">
          A member of our team will be in touch shortly to arrange a suitable time.
          Submitting this form does not confirm an appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2" noValidate>
      <div className="relative">
        <input required id="name" type="text" placeholder=" " className={inputBase} value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
        <label htmlFor="name" className={labelBase}>Full name</label>
      </div>
      <div className="relative">
        <input required id="email" type="email" placeholder=" " className={inputBase} value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
        <label htmlFor="email" className={labelBase}>Email address</label>
      </div>
      <div className="relative">
        <input required id="phone" type="tel" placeholder=" " className={inputBase} value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} />
        <label htmlFor="phone" className={labelBase}>Telephone</label>
      </div>
      <div className="relative">
        <select id="treatment" className={inputBase + " appearance-none"} value={state.treatment} onChange={(e) => setState({ ...state, treatment: e.target.value })}>
          <option value="">Not sure yet — general consultation</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.slug}>{t.name}</option>
          ))}
        </select>
        <label htmlFor="treatment" className={labelBase + " top-0 text-xs text-ink"}>Treatment of interest</label>
      </div>

      <fieldset className="md:col-span-2">
        <legend className="text-xs uppercase tracking-[0.18em] text-ink/50 mb-4">Preferred contact method</legend>
        <div className="flex flex-wrap gap-3">
          {(["email", "phone", "text"] as const).map((m) => (
            <label key={m} className={`cursor-pointer px-5 py-2.5 border text-sm capitalize transition-colors ${state.contact === m ? "border-ink bg-ink text-ivory" : "border-line text-ink/70 hover:border-ink"}`}>
              <input type="radio" name="contact" className="sr-only" checked={state.contact === m} onChange={() => setState({ ...state, contact: m })} />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="relative md:col-span-2">
        <input id="day" type="text" placeholder=" " className={inputBase} value={state.day} onChange={(e) => setState({ ...state, day: e.target.value })} />
        <label htmlFor="day" className={labelBase}>Preferred day or time of week</label>
      </div>

      <div className="relative md:col-span-2">
        <textarea id="message" rows={4} placeholder=" " className={inputBase + " resize-none"} value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
        <label htmlFor="message" className={labelBase}>Tell us anything you'd like us to know</label>
      </div>

      <label className="md:col-span-2 flex items-start gap-3 text-sm text-ink/70">
        <input required type="checkbox" checked={state.consent} onChange={(e) => setState({ ...state, consent: e.target.checked })} className="mt-1 h-4 w-4 accent-ink" />
        <span>
          I consent to Aurelia Dental contacting me about my enquiry. See our
          privacy notice — demo — for how we handle your information.
        </span>
      </label>

      <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-line pt-8">
        <p className="text-xs text-ink/50 max-w-md">
          Submitting this form does not confirm an appointment. Our team will contact you to arrange a suitable time.
        </p>
        <button type="submit" className="btn-primary">Send enquiry</button>
      </div>
    </form>
  );
}
