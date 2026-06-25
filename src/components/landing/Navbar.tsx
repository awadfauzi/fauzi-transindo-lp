import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WaButton } from "./WaButton";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.png";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#muatan", label: "Jenis Muatan" },
  { href: "#area", label: "Area" },
  { href: "#mengapa", label: "Mengapa Kami" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_-12px_rgba(20,30,60,0.18)]"
          : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logoUrl}
            alt="Fauzi Transindo"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-[15px] md:text-base text-navy">FAUZI TRANSINDO</span>
            <span className="text-[10px] md:text-[11px] text-muted-foreground font-medium tracking-wide">Pengiriman Antar Kota</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-navy rounded-full hover:bg-navy-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WaButton size="sm" className="hidden sm:inline-flex">WhatsApp</WaButton>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid size-10 place-items-center rounded-full border border-border bg-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium text-foreground/80 border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
