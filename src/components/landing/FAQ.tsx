import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Apakah sewa armada sudah termasuk driver?", a: "Ya, semua armada kami sudah termasuk driver — Anda tidak perlu menyediakan sopir sendiri." },
  { q: "Bagaimana cara meminta penawaran?", a: "Klik tombol WhatsApp di halaman ini, ceritakan kebutuhan Anda (asal, tujuan, jenis barang, perkiraan volume), dan tim kami akan memberikan penawaran terbaik." },
  { q: "Area mana saja yang dilayani?", a: "Kami melayani penjemputan dari Bandung dan Jakarta dengan tujuan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB." },
  { q: "Jenis armada apa saja yang tersedia?", a: "Granmax Box, Engkel Box, CDD Box, dan CDD Bak. Tim kami bantu memilih armada yang paling sesuai dengan volume dan jenis barang Anda." },
  { q: "Apakah melayani pengiriman antar pulau?", a: "Ya. Kami melayani pengiriman antar pulau ke Sumatera, Bali, dan NTB." },
  { q: "Apakah harga sudah termasuk asuransi?", a: "Untuk asuransi barang, silakan diskusikan dengan tim kami. Kami dapat membantu mengatur perlindungan tambahan sesuai nilai barang." },
  { q: "Berapa lama estimasi pengiriman?", a: "Estimasi waktu tergantung jarak dan tujuan. Tim kami akan memberikan perkiraan realistis saat mengirim penawaran." },
  { q: "Apakah ada layanan pindahan rumah dan kantor?", a: "Ya. Kami melayani pindahan rumah, pindahan kos, dan pindahan kantor — termasuk bantuan tenaga untuk loading dan unloading." },
  { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran dilakukan via transfer bank. Skema DP atau lunas akan didiskusikan saat konfirmasi pesanan." },
  { q: "Apakah saya bisa request armada mendadak?", a: "Bisa, tergantung ketersediaan. Semakin awal Anda menghubungi kami, semakin besar peluang mendapatkan armada sesuai jadwal." },
  { q: "Apakah ada update posisi barang selama pengiriman?", a: "Ya, kami memberikan update berkala kepada PIC Anda hingga barang sampai di tujuan dengan selamat." },
  { q: "Bagaimana jika barang yang dikirim sensitif atau bernilai tinggi?", a: "Informasikan ke tim kami di awal. Kami akan menyesuaikan armada, penanganan, dan rekomendasi pengamanan tambahan." },
  { q: "Apakah melayani kebutuhan rutin perusahaan?", a: "Tentu. Kami terbuka untuk kerja sama jangka panjang dengan distributor, supplier, trading, pabrik, dan UMKM." },
  { q: "Apakah bisa kirim barang dagangan dalam jumlah kecil?", a: "Bisa. Kami melayani UMKM dengan armada Granmax Box sehingga Anda tidak harus menyewa truk besar untuk volume kecil." },
  { q: "Apakah ada tenaga bantu untuk loading dan unloading?", a: "Ya, dapat kami sediakan dengan tambahan biaya yang akan disampaikan di penawaran." },
  { q: "Bagaimana jika lokasi penjemputan sulit dijangkau truk besar?", a: "Beritahu kami kondisi lokasi. Kami akan menyesuaikan jenis armada agar bisa masuk dan tetap efisien." },
  { q: "Apakah Fauzi Transindo melayani pengiriman proyek?", a: "Ya, kami menangani pengiriman peralatan, material, dan logistik proyek dengan armada yang sesuai." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">FAQ</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Pertanyaan yang sering ditanyakan.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${isOpen ? "border-orange/40 bg-white shadow-card" : "border-border bg-white hover:border-navy/20"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-navy text-base md:text-lg">{f.q}</span>
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "bg-orange text-white rotate-45" : "bg-navy-soft text-navy"}`}>
                    <Plus className="size-4" strokeWidth={2.6} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 360 : 0 }}
                >
                  <p className="px-5 md:px-6 pb-6 text-[15px] text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
