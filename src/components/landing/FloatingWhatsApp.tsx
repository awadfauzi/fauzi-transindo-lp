import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = waLink();

  return (
    <>
      {/* Floating bubble */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] opacity-40 group-hover:opacity-60 animate-ping" />
        <span className="relative grid size-14 md:size-16 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_18px_40px_-10px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)] hover:scale-105 transition-transform">
          <MessageCircle className="size-6 md:size-7" strokeWidth={2.4} />
        </span>
      </a>

      {/* Mobile sticky bottom CTA bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="m-3 rounded-2xl bg-navy text-white p-3 flex items-center justify-between gap-3 shadow-elegant border border-white/10">
          <div className="pl-2">
            <div className="text-[11px] text-white/60 font-medium">Butuh truk sekarang?</div>
            <div className="font-display font-semibold text-sm">Hubungi via WhatsApp</div>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--whatsapp)] text-white px-4 py-2.5 text-sm font-semibold shadow-card"
          >
            <MessageCircle className="size-4" strokeWidth={2.4} />
            Chat
          </a>
        </div>
      </div>
    </>
  );
}
