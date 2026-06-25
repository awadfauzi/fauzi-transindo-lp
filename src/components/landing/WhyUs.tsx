import { Zap, Truck, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Respon Cepat",
    desc: "Kami memahami kebutuhan pengiriman sering bersifat mendesak. Tim kami siap merespon pesan WhatsApp Anda dengan sigap.",
  },
  {
    icon: Truck,
    title: "Solusi Armada",
    desc: "Kami membantu mencarikan armada yang paling sesuai dengan kebutuhan customer — dari Granmax Box hingga CDD.",
  },
  {
    icon: HeartHandshake,
    title: "Hubungan Jangka Panjang",
    desc: "Kami mengutamakan kepuasan dan hubungan baik dengan pelanggan, bukan sekadar transaksi sekali jalan.",
  },
];

export function WhyUs() {
  return (
    <section id="mengapa" className="section-y bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-orange/20 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">MENGAPA MEMILIH KAMI</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold">
            Lebih dari sekadar jasa angkut. Kami partner logistik Anda.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 hover:bg-white/[0.07] transition-colors"
            >
              <div className="absolute -top-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
              <div className="text-xs font-display font-bold text-orange mb-5">
                0{i + 1}
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-orange text-white mb-5 shadow-orange">
                <v.icon className="size-6" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{v.title}</h3>
              <p className="text-white/70 leading-relaxed text-[15px]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
