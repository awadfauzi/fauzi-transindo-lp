import {
  Sofa, ShoppingBag, Package, HardHat, Cog, Wrench,
  Briefcase, Home, Building2, HardDrive,
} from "lucide-react";

const items = [
  { icon: Sofa, label: "Furniture" },
  { icon: ShoppingBag, label: "Barang Dagangan" },
  { icon: Package, label: "Produk FMCG" },
  { icon: HardHat, label: "Material Bangunan" },
  { icon: Cog, label: "Mesin & Peralatan" },
  { icon: Wrench, label: "Sparepart" },
  { icon: Briefcase, label: "Peralatan Kantor" },
  { icon: Home, label: "Barang Pindahan Rumah" },
  { icon: Building2, label: "Barang Pindahan Kantor" },
  { icon: HardDrive, label: "Muatan Proyek" },
];

export function CargoTypes() {
  return (
    <section id="muatan" className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-10 md:mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3">JENIS MUATAN</span>
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
            Barang Yang Biasa Kami Kirim.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Beragam jenis muatan kami tangani — dari kebutuhan bisnis hingga personal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="group flex flex-col items-start gap-3 rounded-2xl bg-white border border-border p-5 hover:border-orange/40 hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                <it.icon className="size-5" strokeWidth={2.2} />
              </span>
              <span className="font-display font-semibold text-navy text-[15px] leading-tight">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
