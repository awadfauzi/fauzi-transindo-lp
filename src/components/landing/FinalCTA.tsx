import { WaButton } from "./WaButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,color-mix(in_oklab,var(--orange)_22%,transparent),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-orange/25 blur-3xl" />

      <div className="relative container-px mx-auto max-w-4xl py-20 md:py-28 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.22em] text-orange mb-4">SIAP BERANGKAT?</span>
        <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
          Masih Mencari Truk Untuk Pengiriman Anda?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
          Ceritakan kebutuhan Anda dan kami bantu mencarikan solusi yang sesuai.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <WaButton size="xl">Hubungi via WhatsApp Sekarang</WaButton>
        </div>
        <p className="mt-6 text-sm text-white/55">
          Respon cepat • Penawaran transparan • Tanpa biaya konsultasi
        </p>
      </div>
    </section>
  );
}
