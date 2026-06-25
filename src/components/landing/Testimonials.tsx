import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { category: "Pelanggan Setia", location: "", text: "Barang kiriman saya selalu datang tepat waktu dan dalam keadaan selamat tanpa cacat sedikit pun. Sudah 4 kali pakai jasa ekspedisi mereka, dan pasti akan lanjut lagi." },
  { category: "Kemitraan Bisnis", location: "", text: "Terima kasih atas kemitraan yang sudah terjalin lebih dari 4 tahun ini. Murah, tepat waktu, pelayanan ramah, dan amanah." },
  { category: "Pelanggan Personal", location: "", text: "Driver dan asistennya ramah dan suportif, kalem, nggak grasak-grusuk. Admin juga responsif 24 jam, selalu puas sama pelayanannya." },
  { category: "Testimoni Pelanggan", location: "", text: "Owner-nya ramah dan sangat membantu sekali. Terima kasih." },
  { category: "Pengiriman Antar Pulau", location: "Kupang, NTT", text: "Alhamdulillah, pengalaman kirim barang ke kos anak saya di Bandung. Saya dan anak ada di Kupang, NTT, jadi pakai jasa mobil box — barang dikemas rapi dan sampai rumah dengan aman." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const max = testimonials.length;

  return (
    <section id="testimoni" className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">TESTIMONI PELANGGAN</span>
            <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Dipercaya oleh bisnis dan keluarga di seluruh Indonesia.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIdx((i) => (i - 1 + max) % max)}
              aria-label="Sebelumnya"
              className="grid size-12 place-items-center rounded-full bg-white border border-border hover:border-orange hover:text-orange transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % max)}
              aria-label="Berikutnya"
              className="grid size-12 place-items-center rounded-full bg-navy text-white hover:bg-orange transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                <article className="h-full bg-white rounded-3xl border border-border p-7 flex flex-col gap-4 relative">
                  <Quote className="absolute top-6 right-6 size-8 text-orange/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-orange text-orange" />
                    ))}
                  </div>
                  <p className="text-[15px] text-foreground/85 leading-relaxed grow">"{t.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-display font-bold text-navy text-base">{t.category}</div>
                    {t.location && (
                      <div className="text-xs text-muted-foreground mt-0.5">{t.location}</div>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-orange" : "w-1.5 bg-navy/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
