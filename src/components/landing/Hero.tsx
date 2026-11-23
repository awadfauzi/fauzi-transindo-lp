import { useEffect, useState } from "react";
import { Check, ArrowRight, Sparkles, Star } from "lucide-react";
import granmax from "@/assets/armada-1.jpg";
import engkel from "@/assets/armada-2.jpg";
import dobel from "@/assets/armada-3.jpg";
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

const heroImages = [
  { src: granmax, alt: "Granmax Box Fauzi Transindo" },
  { src: engkel, alt: "CDE Engkel Box Fauzi Transindo" },
  { src: dobel, alt: "CDD Dobel Box Fauzi Transindo" },
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveImage((i) => (i + 1) % heroImages.length), 4000);
    return () => window.clearInterval(timer);
  }, []);
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
            Sewa Mobil Box & Truk dengan Sopir dari{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Bandung</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-orange/30 -z-0 rounded-sm" />
            </span>{" "}
            ke Berbagai Kota.
          </h1>

          <p className="text-balance text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Granmax Box, CDE Engkel, dan CDD Dobel untuk angkutan barang usaha, distribusi, serta pindahan. Satu armada khusus untuk kebutuhan Anda, tanpa digabung dengan muatan pelanggan lain.
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

          <p className="text-sm font-semibold text-navy">
            Sewa per armada (FTL), bukan tarif per kg atau paket. Semua armada dengan sopir, tanpa lepas kunci.
          </p>

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
            {heroImages.map(({ src, alt }, index) => (
              <img
                key={src}
                src={src}
                alt={alt}
                aria-hidden={index !== activeImage}
                className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-700 ${index === activeImage ? "opacity-100" : "opacity-0"}`}
                width={880}
                height={1100}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/45 via-transparent to-transparent" />
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lihat ${SITE.googleReviewCount} ulasan asli Fauzi Transindo di Google`}
              className="absolute top-3 left-3 z-10 max-w-[70%] bg-white/95 backdrop-blur rounded-xl border border-white/90 px-2.5 py-1.5 shadow-card hover:bg-white hover:shadow-elegant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange transition-all"
            >
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[11px] font-bold text-navy">Google Reviews</span>
                <span className="inline-flex items-center gap-0.5" aria-label={`Rating ${SITE.googleRating.toFixed(1)} dari 5`}>
                  {[0,1,2,3,4].map(i => <Star key={i} className="size-2.5 fill-orange text-orange" />)}
                </span>
                <span className="text-[11px] font-extrabold text-navy">{SITE.googleRating.toFixed(1).replace(".", ",")}</span>
              </div>
              <div className="text-[10px] font-semibold text-navy mt-0.5">{SITE.googleReviewCount} ulasan pelanggan</div>
              <div className="text-[9px] text-orange mt-0.5 font-semibold">Lihat ulasan asli ↗</div>
            </a>
            <div className="absolute bottom-3 left-3 w-[58%] max-w-[245px] bg-white/95 backdrop-blur rounded-xl border border-white px-2.5 py-2 flex items-center justify-between gap-2 shadow-card">
              <div>
                <div className="text-[9px] font-bold tracking-[0.12em] text-orange">RESPON CEPAT</div>
                <div className="font-display font-semibold text-navy text-[11px] leading-tight mt-0.5">Konsultasi gratis<br/>via WhatsApp</div>
              </div>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-orange animate-float">
                <ArrowRight className="size-3.5" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
