import { ArrowUpRight, Truck, BadgeCheck } from "lucide-react";
import granmax from "@/assets/granmax-box.jpg";
import engkel from "@/assets/engkel-box.jpg";
import cddBox from "@/assets/cdd-box.jpg";
import cddBak from "@/assets/cdd-bak.jpg";
import pindahanRumah from "@/assets/pindahan-rumah.jpg";
import pindahanKantor from "@/assets/pindahan-kantor.jpg";
import antarKota from "@/assets/cat-antar-kota.jpg";
import antarPulau from "@/assets/cat-antar-pulau.jpg";
import { waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

type Armada = {
  img: string;
  title: string;
  capacity: string;
  dim: string;
  desc: string;
  withDriver?: boolean;
  fit?: "cover" | "contain";
  highlight?: boolean;
};

const armada: Armada[] = [
  { img: antarKota, title: "Pengiriman Antar Kota", capacity: "Layanan Utama", dim: "Bandung • Jawa, Sumatera, Bali & NTB", desc: "Layanan pengiriman antar kota dari Bandung — bisnis maupun personal.", highlight: true, fit: "cover" },
  { img: antarPulau, title: "Pengiriman Antar Pulau", capacity: "Sumatera • Bali • NTB", dim: "Penyeberangan & koordinasi rute", desc: "Pengiriman antar pulau ke Sumatera, Bali, dan NTB dengan armada dan rute yang sudah teruji.", fit: "cover" },
  { img: pindahanRumah, title: "Pindahan Rumah", capacity: "Personal", dim: "Pengemasan & pemindahan", desc: "Pindahan rumah cepat, rapi, dan aman dengan tim berpengalaman.", fit: "cover" },
  { img: pindahanKantor, title: "Pindahan Kantor", capacity: "Bisnis", dim: "Minim ganggu operasional", desc: "Pindahan kantor terkoordinasi agar aktivitas bisnis Anda tetap berjalan.", fit: "cover" },
  { img: granmax, title: "Granmax Box — Pengiriman Barang Cepat", capacity: "± 800 kg", dim: "± 2.2 × 1.5 × 1.2 m • Vol. 3–4 m³", desc: "Armada ringkas untuk pengiriman volume kecil dalam kota maupun antar kota.", withDriver: true, fit: "contain" },
  { img: engkel, title: "Engkel Box — Armada Standar Kami", capacity: "± 2 Ton", dim: "± 3.0 × 1.6 × 1.6 m • Vol. 7–8 m³", desc: "Pilihan ideal untuk pengiriman menengah dengan ruang muat lebih lega.", withDriver: true, fit: "contain" },
  { img: cddBox, title: "CDD Box — Pengiriman Kapasitas Besar", capacity: "± 4 Ton", dim: "± 4.0 × 1.8 × 1.8 m • Vol. 13–14 m³", desc: "Truk box berkapasitas besar untuk pengiriman antar provinsi dan antar pulau.", withDriver: true, fit: "contain" },
  { img: cddBak, title: "CDD Bak — Material & Muatan Besar", capacity: "± 4 Ton", dim: "± 4.0 × 1.8 × 1.8 m • Vol. 13–14 m³", desc: "Bak terbuka untuk muatan besar, material, dan barang non-pecah belah.", withDriver: true, fit: "contain" },
];

function ServiceCard({ s }: { s: Armada }) {
  return (
    <a
      key={s.title}
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-3xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${s.fit === "contain" ? "bg-white" : "bg-navy-soft"}`}>
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          className={`size-full ${s.fit === "contain" ? "object-contain p-3" : "object-cover object-center"} group-hover:scale-105 transition-transform duration-500`}
        />
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded-full backdrop-blur px-3 py-1 text-[11px] font-bold tracking-wide ${s.highlight ? "bg-orange text-white" : "bg-navy/90 text-white"}`}>
          {s.highlight && <Truck className="size-3" strokeWidth={2.6} />}
          {s.capacity}
        </span>
        {s.withDriver && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-[var(--whatsapp)]/95 backdrop-blur px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-white shadow">
            <BadgeCheck className="size-3" strokeWidth={2.6} />
            Dengan Driver
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col gap-2 grow">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-navy text-xl">{s.title}</h3>
          <ArrowUpRight className="size-5 text-navy/40 group-hover:text-orange group-hover:rotate-12 transition-all shrink-0" />
        </div>
        <div className="text-[12px] font-medium text-navy/60 tracking-wide">{s.dim}</div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1 grow">{s.desc}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--whatsapp)]">
          Minta penawaran via WhatsApp
        </span>
      </div>
    </a>
  );
}

export function Services() {
  const row1 = armada.slice(0, 4);
  const row2 = armada.slice(4, 8);

  return (
    <section id="layanan" className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">LAYANAN UTAMA</span>
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Pengiriman Barang Antar Kota & Armada Lengkap Sesuai Kebutuhan.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Tidak yakin armada mana yang sesuai? Tim kami bantu rekomendasikan setelah Anda ceritakan barangnya via WhatsApp.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {row1.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {row2.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
