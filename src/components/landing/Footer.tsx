import { MapPin, Phone, Mail, Clock, Star, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";
import logoUrl from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1.3fr] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoUrl}
                alt="Fauzi Transindo"
                className="h-14 w-auto object-contain"
              />
              <span className="font-display font-bold text-white text-lg">FAUZI TRANSINDO</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              {SITE.tagline}. Jasa pengiriman barang antar kota dari Bandung & Jakarta ke Jawa, Sumatera, Bali & NTB dengan pelayanan personal dan responsif.
            </p>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 text-xs font-semibold text-white"
            >
              <Star className="size-3.5 fill-orange text-orange" />
              {SITE.googleRating.toFixed(1)} • {SITE.googleReviewCount} Ulasan Google
            </a>

            <div className="mt-5">
              <h5 className="text-xs font-bold tracking-[0.18em] text-white/60 mb-2.5">IKUTI KAMI</h5>
              <div className="flex items-center gap-2.5">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${SITE.social.instagramHandle}`}
                  className="grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors"
                >
                  <Instagram className="size-4.5" strokeWidth={2.2} />
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Fauzi Transindo"
                  className="grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors"
                >
                  <Facebook className="size-4.5" strokeWidth={2.2} />
                </a>
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Fauzi Transindo"
                  className="grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors"
                >
                  <Star className="size-4.5 fill-current" strokeWidth={2.2} />
                </a>
              </div>
              <p className="text-[11.5px] text-white/45 mt-2">Instagram: {SITE.social.instagramHandle}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">NAVIGASI</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#layanan" className="hover:text-orange transition-colors">Layanan</a></li>
              <li><a href="#muatan" className="hover:text-orange transition-colors">Jenis Muatan</a></li>
              <li><a href="#area" className="hover:text-orange transition-colors">Area Layanan</a></li>
              <li><a href="#mengapa" className="hover:text-orange transition-colors">Mengapa Kami</a></li>
              <li><a href="#testimoni" className="hover:text-orange transition-colors">Testimoni</a></li>
              <li><a href="#faq" className="hover:text-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider">KONTAK</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 text-orange mt-0.5 shrink-0" />
                <span>WhatsApp: {SITE.waNumberDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-orange mt-0.5 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-orange transition-colors">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-orange mt-0.5 shrink-0" />
                <span>
                  {SITE.address.line1}<br/>
                  {SITE.address.line2}<br/>
                  {SITE.address.city}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 text-orange mt-0.5 shrink-0" />
                <span>
                  {SITE.hours}<br/>
                  <span className="text-white/45 text-xs">Pesan WhatsApp tetap diterima di luar jam operasional.</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p>© 2011–2026 Fauzi Transindo. All rights reserved.</p>
          <p className="text-white/40">Pengiriman Barang Antar Kota Bandung & Jakarta</p>
        </div>
      </div>
    </footer>
  );
}
