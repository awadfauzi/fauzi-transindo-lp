import { Headphones, MessageSquareText, Handshake, Map, Truck, Users } from "lucide-react";

const solutions = [
  { icon: Headphones, title: "Pelayanan personal", desc: "Setiap pelanggan ditangani dengan pendekatan yang menyesuaikan kebutuhan, bukan sekadar template." },
  { icon: MessageSquareText, title: "Komunikasi cepat", desc: "Tim kami merespon pesan dengan sigap, supaya Anda tidak menunggu dalam ketidakpastian." },
  { icon: Handshake, title: "Pendampingan sampai tiba", desc: "Update jelas dari penjemputan hingga barang sampai di tujuan dengan selamat." },
  { icon: Map, title: "Jangkauan luas", desc: "Jaringan menjangkau Jawa, Sumatera, Bali, Lombok, dan kota-kota besar lainnya." },
  { icon: Truck, title: "Armada sesuai kebutuhan", desc: "Granmax Box, Engkel Box, CDD Box, hingga CDD Bak siap dipilih sesuai volume Anda." },
  { icon: Users, title: "Untuk bisnis & perorangan", desc: "Melayani perusahaan, UMKM, sekaligus kebutuhan pindahan rumah, kos, dan kantor." },
];

export function Solutions() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">SOLUSI KAMI</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Kami Membantu Anda Fokus Pada Barang, Bukan Repot Mencari Truk.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="relative bg-white rounded-2xl border border-border p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-xs font-display font-bold text-navy/15">
                0{i + 1}
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-navy text-white mb-5 shadow-card">
                <s.icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-navy text-xl mb-2">{s.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
