import { Truck, PhoneCall, DollarSign, Radar, Clock, UserX } from "lucide-react";

const problems = [
  { icon: Truck, title: "Sulit menemukan armada yang tersedia", desc: "Saat butuh mendadak, hampir semua vendor tidak punya unit yang siap." },
  { icon: PhoneCall, title: "Harus menghubungi banyak pihak", desc: "Anda buang waktu menelepon berkali-kali hanya untuk dapat satu penawaran." },
  { icon: DollarSign, title: "Harga tidak jelas", desc: "Penawaran tanpa rincian dan sering muncul biaya tambahan di belakang." },
  { icon: Radar, title: "Sulit mendapatkan update pengiriman", desc: "Tidak tahu posisi barang dan harus bertanya berulang tanpa jawaban pasti." },
  { icon: Clock, title: "Respon lambat saat dibutuhkan", desc: "Pesan dibalas berjam-jam, padahal Anda butuh kepastian sekarang juga." },
  { icon: UserX, title: "Tidak ada PIC yang bisa diandalkan", desc: "Tidak ada satu orang yang benar-benar bertanggung jawab atas pengiriman Anda." },
];

export function Problems() {
  return (
    <section className="section-y bg-navy-soft/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">MASALAH UMUM</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Mencari Truk Seharusnya Tidak Serumit Ini.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Jika salah satu dari ini terasa familiar, Anda tidak sendirian.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white rounded-2xl border border-border p-6 hover:border-orange/40 hover:shadow-card transition-all"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-orange-soft text-orange mb-4 group-hover:scale-105 transition-transform">
                <p.icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-navy text-lg mb-1.5">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
