import { Quote } from "lucide-react";
import { WaButton } from "./WaButton";

export function OwnerMessage() {
  return (
    <section id="tentang" className="section-y">
      <div className="container-px mx-auto max-w-4xl">
        <div className="relative">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">TENTANG KAMI</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Pengiriman yang Responsif, Personal, dan Berorientasi Pada Solusi.
          </h2>

          <div className="mt-7 relative pl-7 border-l-2 border-orange/40 space-y-4">
            <Quote className="absolute -top-2 -left-3 size-7 text-orange bg-background" />
            <p className="text-balance text-lg md:text-xl text-foreground/85 leading-relaxed font-display font-medium">
              Sejak berdiri tahun 2011, Fauzi Transindo telah melayani ratusan pelanggan untuk kebutuhan pengiriman dan pindahan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Kami tidak hanya menyediakan armada, tetapi juga membantu pelanggan menemukan solusi pengiriman yang paling sesuai dengan kebutuhannya — responsif, personal, dan berorientasi pada solusi.
            </p>
          </div>

          <div className="mt-8">
            <WaButton size="lg">Bicara langsung via WhatsApp</WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
