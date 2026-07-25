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
          {/* Floating bubble - Enhanced with animations */}
              <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat WhatsApp"
                        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group animate-bounce"
                      >
                {/* Triple pulse ring effect */}
                      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 group-hover:opacity-80 animate-ping" />
                      <span className="absolute inset-0 rounded-full bg-[#25d366]/40 animate-pulse" />
              
                {/* Main button - Larger and more prominent */}
                      <span className="relative grid size-16 md:size-20 place-items-center rounded-full bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white shadow-[0_20px_50px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform active:scale-95">
                                <MessageCircle className="size-8 md:size-9" strokeWidth={2.2} />
                      </span>span>
              
                {/* Badge indicator */}
                      <span className="absolute -top-1 -right-1 flex items-center justify-center size-6 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg animate-pulse">
                                💬
                      </span>span>
              </a>a>
        
          {/* Mobile sticky bottom CTA bar - Enhanced styling */}
              <div
                        className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
                                    showSticky ? "translate-y-0" : "translate-y-full"
                        }`}
                      >
                      <div className="m-3 rounded-2xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white p-4 flex items-center justify-between gap-3 shadow-elegant border border-white/20">
                                <div className="pl-2">
                                            <div className="text-xs text-white/80 font-semibold">
                                                          ✓ Gratis • Respons Cepat
                                            </div>div>
                                            <div className="font-display font-bold text-base">
                                                          Chat Konsultasi Armada
                                            </div>div>
                                </div>div>
                                <a
                                              href={href}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center gap-1.5 rounded-xl bg-white text-[#25d366] px-5 py-3 text-sm font-bold shadow-card hover:scale-105 transition-transform whitespace-nowrap active:scale-95"
                                            >
                                            <MessageCircle className="size-5" strokeWidth={2.4} />
                                            Chat
                                </a>a>
                      </div>div>
              </div>div>
        </>>
      );
}</>
