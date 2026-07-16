import { useState } from "react";
import { Plus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl md:text-2xl text-ink pr-4">{it.q}</span>
              <Plus
                className={`h-5 w-5 mt-2 shrink-0 text-ink/60 transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-ink/70 leading-relaxed">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
