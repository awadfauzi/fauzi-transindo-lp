import { Check, ArrowRight, Sparkles, Star } from "lucide-react";
import heroPic from "@/assets/heropic.jpg";
import { WaButton } from "./WaButton";
import { SITE } from "@/lib/site";

const badges = [
  "15+ Tahun Pengalaman",
  "Rating Google 5.0",
  `${SITE.googleReviewCount} Ulasan Google`,
  "Ratusan Pelanggan Terlayani",
  "Melayani B2B & B2C",
  "Jawa, Sumatera, Bali & NTB",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--orange)_12%,transparent)_0%,transparent_60%),linear-gradient(180deg,var(--navy-soft)_0%,white_70%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[460px] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--navy)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--navy)_6%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-navy/10 bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-navy/80 shadow-card animate-fade-in">
            <Sparkles className="size-3.5 text-orange" strokeWidth={2.6} />
            Respon Cepat • Pelayanan Personal
          </div>

          <h1 className="text-balance text-[32px] leading-[1.05] sm:text-5xl lg:text-[56px] font-extrabold text-navy">
            Jasa Pengiriman Barang Antar Kota dari{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Bandung</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-orange/30 -z-0 rounded-sm" />
            </span>{" "}
            , Cepat & Terpercaya.
          </h1>

          <p className="text-balance text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Kirim barang ke seluruh Jawa dengan armada mobil box kami. Terjamin tepat waktu, harga kompetitif, dan asuransi penuh.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <WaButton size="lg">Minta Penawaran via WhatsApp</WaButton>
            <a
              href="#layanan"
              className="inline-flex items-center gap-1.5 h-14 px-6 rounded-full font-semibold text-navy hover:text-orange transition-colors"
            >
              Lihat Layanan
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-3.5 py-2 text-[13px] font-semibold text-navy shadow-card"
              >
                <Check className="size-3.5 text-[var(--whatsapp)]" strokeWidth={3} />
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-navy/10">
            <img
              src={heroPic}
              alt="Forklift memuat barang ke truk box di area pelabuhan/gudang"
              className="size-full object-cover object-center"
              width={1600}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/45 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur rounded-2xl border border-white px-4 py-3 shadow-card">
              <div className="flex items-center gap-1.5">
                {[0,1,2,3,4].map(i => <Star key={i} className="size-4 fill-orange text-orange" />)}
                <span className="ml-1 text-sm font-bold text-navy">{SITE.googleRating.toFixed(1)}</span>
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5 font-medium">{SITE.googleReviewCount} Ulasan Google</div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl border border-white p-4 flex items-center justify-between gap-3 shadow-card">
              <div>
                <div className="text-[11px] font-bold tracking-[0.18em] text-orange">RESPON CEPAT</div>
                <div className="font-display font-semibold text-navy text-sm leading-tight mt-1">Konsultasi gratis<br/>via WhatsApp</div>
              </div>
              <span className="grid size-11 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-orange animate-float">
                <ArrowRight className="size-5" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
