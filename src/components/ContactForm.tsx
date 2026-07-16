import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

const inputBase =
  "w-full bg-transparent border-0 border-b border-line pt-6 pb-2 text-ink placeholder-transparent focus:outline-none focus:border-ink transition-colors peer";
const labelBase =
  "absolute left-0 top-6 text-ink/50 text-sm transition-all pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-line bg-cream p-10 text-center">
        <Check className="h-6 w-6 mx-auto text-sage" aria-hidden />
        <p className="mt-4 font-serif text-2xl text-ink">Thank you. We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8" noValidate>
      <div className="relative">
        <input required id="c-name" type="text" placeholder=" " className={inputBase} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <label htmlFor="c-name" className={labelBase}>Full name</label>
      </div>
      <div className="relative">
        <input required id="c-email" type="email" placeholder=" " className={inputBase} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <label htmlFor="c-email" className={labelBase}>Email address</label>
      </div>
      <div className="relative">
        <input id="c-subject" type="text" placeholder=" " className={inputBase} value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} />
        <label htmlFor="c-subject" className={labelBase}>Subject</label>
      </div>
      <div className="relative">
        <textarea required id="c-message" rows={5} placeholder=" " className={inputBase + " resize-none"} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <label htmlFor="c-message" className={labelBase}>Message</label>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">Send message</button>
      </div>
    </form>
  );
}
