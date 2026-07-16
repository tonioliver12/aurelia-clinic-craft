import { useRef, useState, type PointerEvent } from "react";

type Props = {
  before: string;
  after: string;
  label?: string;
  alt: string;
};

export function BeforeAfter({ before, after, label, alt }: Props) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    update(e.clientX);
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full overflow-hidden bg-bone select-none touch-none cursor-ew-resize"
      onPointerDown={onDown}
      onPointerMove={onMove}
      role="slider"
      aria-label={label ?? "Before and after comparison"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
      }}
    >
      <img src={after} alt={`After — ${alt}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={`Before — ${alt}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" aria-hidden />
      </div>

      <div
        className="absolute inset-y-0 w-px bg-ivory pointer-events-none"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-ivory shadow-elevated grid place-items-center">
          <div className="flex gap-0.5">
            <span className="block h-3 w-px bg-ink" />
            <span className="block h-3 w-px bg-ink" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-[0.2em] text-ivory bg-ink/60 px-2.5 py-1">Before</div>
      <div className="absolute top-4 right-4 text-[0.65rem] uppercase tracking-[0.2em] text-ivory bg-ink/60 px-2.5 py-1">After</div>
    </div>
  );
}
