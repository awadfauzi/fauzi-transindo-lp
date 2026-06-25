import { MessageCircle, ClipboardList, FileText, CalendarCheck2, Truck } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Hubungi WhatsApp", desc: "Klik tombol WhatsApp dan mulai percakapan dengan tim kami." },
  { icon: ClipboardList, title: "Jelaskan Kebutuhan", desc: "Ceritakan asal, tujuan, jenis barang, dan perkiraan volume." },
  { icon: FileText, title: "Terima Penawaran", desc: "Kami berikan penawaran transparan dengan rincian yang jelas." },
  { icon: CalendarCheck2, title: "Jadwalkan Pengiriman", desc: "Konfirmasi jadwal dan titik penjemputan barang Anda." },
  { icon: Truck, title: "Barang Dikirim", desc: "Armada berangkat, posisi diupdate sampai barang tiba selamat." },
];

export function Process() {
  return (
    <section id="proses" className="section-y bg-navy-soft/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">CARA KERJA</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            5 langkah sederhana, barang Anda berangkat.
          </h2>
        </div>

        <div className="relative">
          {/* timeline line desktop */}
          <div className="hidden lg:block absolute top-9 left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:text-center">
                  <div className="relative shrink-0">
                    <span className="grid size-[72px] place-items-center rounded-full bg-white border-2 border-orange/20 text-orange shadow-card relative z-10">
                      <s.icon className="size-7" strokeWidth={2.2} />
                    </span>
                    <span className="absolute -top-1.5 -right-1.5 grid size-7 place-items-center rounded-full bg-orange text-white text-xs font-display font-bold shadow-orange z-20">
                      {i + 1}
                    </span>
                  </div>
                  <div className="lg:mt-2">
                    <h3 className="font-display font-semibold text-navy text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
