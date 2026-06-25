import { Star, Users, MapPinned, Zap, Heart, Building2, ExternalLink, UsersRound } from "lucide-react";
import { SITE } from "@/lib/site";

const items = [
  { icon: Star, label: `${SITE.googleRating.toFixed(1)} Rating Google`, sub: `${SITE.googleReviewCount} ulasan` },
  { icon: Users, label: "15+ Tahun Pengalaman", sub: "Berdiri sejak 2011" },
  { icon: UsersRound, label: "Ratusan Pelanggan Terlayani", sub: "Bisnis & personal" },
  { icon: Building2, label: "Melayani B2B & B2C", sub: "Bisnis & Personal" },
  { icon: MapPinned, label: "Jawa, Sumatera, Bali & NTB", sub: "Antar kota & pulau" },
  { icon: Heart, label: "Pelayanan Personal", sub: "Solusi sesuai Anda" },
  { icon: Zap, label: "Respon Cepat", sub: "Balasan WhatsApp sigap" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust" className="relative -mt-6 md:-mt-12 z-10 section-y !pt-0 md:!pt-0">
      <div className="container-px mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white border border-border shadow-elegant overflow-hidden">
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-br from-navy-soft/70 to-white flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-2">TRUST & REVIEWS</span>
              <h2 className="text-balance text-2xl md:text-3xl lg:text-4xl font-bold text-navy max-w-2xl">
                Dipercaya Ratusan Pelanggan Sejak 2011.
              </h2>
            </div>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-navy/90 transition-colors shadow-card"
            >
              <Star className="size-4 fill-orange text-orange" />
              Lihat Review Google
              <ExternalLink className="size-3.5 opacity-70" />
            </a>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 divide-y md:divide-y-0 divide-border md:divide-x">
            {items.map((it) => (
              <li key={it.label} className="flex flex-col gap-2 px-5 py-5 md:py-6">
                <span className="grid size-10 place-items-center rounded-xl bg-orange/10 text-orange shrink-0">
                  <it.icon className="size-5" strokeWidth={2.3} />
                </span>
                <div>
                  <div className="text-sm font-bold text-navy leading-tight">{it.label}</div>
                  <div className="text-[11.5px] text-muted-foreground mt-0.5">{it.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
