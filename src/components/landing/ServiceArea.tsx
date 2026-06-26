import { MapPin, ArrowRight, Truck } from "lucide-react";

const origins = ["Bandung"];
const destinations = [
  "Palembang",
  "Bengkulu",
  "Jambi",
  "Jakarta",
  "Bandung",
  "Banten",
  "Semarang",
  "Jogja",
  "Surabaya",
  "Denpasar",
  "Mataram",
];

const regions = [
  { name: "Bandung", x: "42%", y: "72%", origin: true },
  { name: "Jakarta", x: "40%", y: "68%" },
  { name: "Semarang", x: "48%", y: "72%" },
  { name: "Jogja", x: "50%", y: "76%" },
  { name: "Surabaya", x: "56%", y: "72%" },
  { name: "Palembang", x: "26%", y: "55%" },
  { name: "Jambi", x: "22%", y: "48%" },
  { name: "Bengkulu", x: "20%", y: "60%" },
  { name: "Denpasar", x: "64%", y: "78%" },
  { name: "Mataram", x: "70%", y: "78%" },
];

export function ServiceArea() {
  return (
    <section id="area" className="section-y bg-navy-soft/60">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">AREA LAYANAN</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Dari Bandung ke Jawa, Sumatera, Bali & NTB.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Penjemputan utama dari Bandung menuju berbagai kota tujuan populer di Jawa, Sumatera, Bali, dan NTB.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-5">
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-navy/60 mb-3 flex items-center gap-2">
                <Truck className="size-3.5 text-orange" /> KOTA ASAL MUAT
              </h3>
              <ul className="flex flex-col gap-2">
                {origins.map((o) => (
                  <li key={o} className="flex items-center gap-2.5 rounded-xl bg-white border-2 border-orange/30 px-4 py-3 text-sm font-bold text-navy">
                    <MapPin className="size-4 text-orange shrink-0" strokeWidth={2.6} />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-navy/60 mb-3 flex items-center gap-2">
                <ArrowRight className="size-3.5 text-orange" /> KOTA TUJUAN POPULER
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {destinations.map((d) => (
                  <li key={d} className="flex items-center gap-2 rounded-xl bg-white border border-border px-3 py-2.5 text-[13px] font-semibold text-navy">
                    <ArrowRight className="size-3.5 text-orange shrink-0" strokeWidth={2.6} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted-foreground italic">
            Konsultasikan rute Anda via WhatsApp — kami bantu cek kelayakan dan estimasi.
          </p>
        </div>

        <div className="relative aspect-[16/10] rounded-3xl bg-white border border-border p-6 overflow-hidden shadow-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--orange)_8%,transparent),transparent_60%)]" />
          <svg viewBox="0 0 800 460" className="size-full" aria-hidden>
            <defs>
              <linearGradient id="island2" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--navy)" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <path d="M60 110 Q140 80 200 140 T260 240 Q230 280 180 270 T100 220 Q60 180 60 110Z" fill="url(#island2)" />
            <path d="M310 130 Q400 100 450 160 T470 280 Q420 310 360 290 T310 220 Z" fill="url(#island2)" opacity="0.7" />
            <path d="M520 140 Q560 130 570 180 T600 240 Q580 270 560 250 T540 200 Z" fill="url(#island2)" opacity="0.7" />
            <path d="M650 180 Q720 160 760 210 T740 290 Q700 310 660 280 T630 230 Z" fill="url(#island2)" opacity="0.7" />
            <path d="M260 320 Q340 305 420 320 T540 330 Q480 360 380 358 T260 340 Z" fill="var(--navy)" />
            <circle cx="510" cy="345" r="8" fill="var(--navy)" />
            <circle cx="560" cy="350" r="6" fill="var(--navy)" />
          </svg>

          {regions.map((r) => (
            <div
              key={r.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
              style={{ left: r.x, top: r.y }}
            >
              <span className="relative grid size-3 place-items-center">
                <span className={`absolute inset-0 rounded-full animate-ping ${r.origin ? "bg-orange/60" : "bg-orange/40"}`} />
                <span className={`relative size-3 rounded-full ring-2 ring-white shadow ${r.origin ? "bg-orange" : "bg-navy"}`} />
              </span>
              <span className="text-[11px] font-bold text-navy bg-white/95 backdrop-blur px-2 py-0.5 rounded-full shadow-card flex items-center gap-1">
                {r.origin && <span className="text-orange">●</span>}
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
