export const SITE = {
  name: "Fauzi Transindo",
  tagline: "Pengiriman Antar Kota dari Bandung — Cepat, Aman, Terpercaya",
  waNumber: "6282117207037",
  waNumberDisplay: "0821-1720-7037",
  email: "fauzitransindo@gmail.com",
  address: {
    line1: "Komplek Neglasari 1, Jl. Neglasuci No. 27",
    line2: "Kel. Pasanggrahan, Kec. Ujungberung",
    city: "Kota Bandung, Jawa Barat, Indonesia",
  },
  hours: "Senin–Sabtu • 08.00–17.00 WIB",
  googleReviewUrl: "https://maps.app.goo.gl/QeW2ZhjXs92tYHQAA",
  googleRating: 5.0,
  googleReviewCount: 63,
  yearsExperience: 15,
  foundedYear: 2011,
  social: {
    instagram: "https://instagram.com/sewa_mobilbox_bandung",
    instagramHandle: "@sewa_mobilbox_bandung",
    facebook: "https://www.facebook.com/fauzi.transindo/",
  },
};

export const DEFAULT_WA_MESSAGE = `Halo Kak Fauzi 👋

Saya tertarik dengan layanan pengiriman antar kota dari Bandung.

Saya butuh solusi pengiriman barang, bisa dibantu rekomendasikan armada yang tepat?

(lp)`;

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.waNumber}?text=${text}`;
}