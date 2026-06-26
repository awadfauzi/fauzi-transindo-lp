import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, S as Sparkles, A as ArrowRight, C as Check, a as Star, E as ExternalLink, U as Users, b as UsersRound, B as Building2, c as MapPinned, H as Heart, Z as Zap, T as Truck, P as PhoneCall, D as DollarSign, R as Radar, d as Clock, e as UserX, f as Headphones, g as MessageSquareText, h as Handshake, i as Map, j as Sofa, k as ShoppingBag, l as Package, m as HardHat, n as Cog, W as Wrench, o as Briefcase, p as House, q as HardDrive, r as MapPin, s as HeartHandshake, Q as Quote, t as ChevronLeft, u as ChevronRight, v as MessageCircle, w as ClipboardList, F as FileText, x as CalendarCheck2, y as Plus, I as Instagram, z as Facebook, G as Phone, J as Mail, K as BadgeCheck, L as ArrowUpRight } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const SITE = {
  tagline: "Pengiriman Antar Kota dari Bandung — Cepat, Aman, Terpercaya",
  waNumber: "6282117207037",
  waNumberDisplay: "0821-1720-7037",
  email: "fauzitransindo@gmail.com",
  address: {
    line1: "Komplek Neglasari 1, Jl. Neglasuci No. 27",
    line2: "Kel. Pasanggrahan, Kec. Ujungberung",
    city: "Kota Bandung, Jawa Barat, Indonesia"
  },
  hours: "Senin–Sabtu • 08.00–17.00 WIB",
  googleReviewUrl: "https://maps.app.goo.gl/QeW2ZhjXs92tYHQAA",
  googleRating: 5,
  googleReviewCount: 63,
  social: {
    instagram: "https://instagram.com/sewa_mobilbox_bandung",
    instagramHandle: "@sewa_mobilbox_bandung",
    facebook: "https://www.facebook.com/fauzi.transindo/"
  }
};
const DEFAULT_WA_MESSAGE = `Halo Kak Fauzi 👋

Saya tertarik dengan layanan pengiriman antar kota dari Bandung.

Saya butuh solusi pengiriman barang, bisa dibantu rekomendasikan armada yang tepat?

(lp)`;
function waLink(message = DEFAULT_WA_MESSAGE) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.waNumber}?text=${text}`;
}
const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
  xl: "h-16 px-9 text-lg"
};
function WaButton({
  message = DEFAULT_WA_MESSAGE,
  children,
  className,
  size = "md",
  variant = "solid",
  withIcon = true
}) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 will-change-transform";
  const variants = {
    solid: "bg-[var(--whatsapp)] text-white shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)]",
    outline: "border border-navy/15 bg-white text-navy hover:border-navy/30 hover:bg-navy-soft",
    white: "bg-white text-navy hover:bg-white/95 shadow-card hover:-translate-y-0.5"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: waLink(message),
      target: "_blank",
      rel: "noopener noreferrer",
      className: cn(base, sizes[size], variants[variant], className),
      children: [
        withIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-[1.1em]", strokeWidth: 2.4 }),
        children
      ]
    }
  );
}
const logoUrl = "/assets/logo-B8r-wj5P.png";
const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#muatan", label: "Jenis Muatan" },
  { href: "#area", label: "Area" },
  { href: "#mengapa", label: "Mengapa Kami" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_2px_20px_-12px_rgba(20,30,60,0.18)]" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoUrl,
                alt: "Fauzi Transindo",
                className: "h-10 w-auto object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex flex-col leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[15px] md:text-base text-navy", children: "FAUZI TRANSINDO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-[11px] text-muted-foreground font-medium tracking-wide", children: "Pengiriman Antar Kota" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "px-4 py-2 text-sm font-medium text-foreground/75 hover:text-navy rounded-full hover:bg-navy-soft transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { size: "sm", className: "hidden sm:inline-flex", children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "lg:hidden grid size-10 place-items-center rounded-full border border-border bg-white",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-7xl py-4 flex flex-col", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "py-3 text-[15px] font-medium text-foreground/80 border-b border-border last:border-0",
            children: l.label
          },
          l.href
        )) }) })
      ]
    }
  );
}
const heroPic = "/assets/heropic-Dn0pJfmK.jpg";
const badges = [
  "15+ Tahun Pengalaman",
  "Rating Google 5.0",
  `${SITE.googleReviewCount} Ulasan Google`,
  "Ratusan Pelanggan Terlayani",
  "Melayani B2B & B2C",
  "Jawa, Sumatera, Bali & NTB"
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--orange)_12%,transparent)_0%,transparent_60%),linear-gradient(180deg,var(--navy-soft)_0%,white_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 -z-10 h-[460px] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--navy)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--navy)_6%,transparent)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-7 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 self-start rounded-full border border-navy/10 bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-navy/80 shadow-card animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 text-orange", strokeWidth: 2.6 }),
          "Respon Cepat • Pelayanan Personal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-[32px] leading-[1.05] sm:text-5xl lg:text-[56px] font-extrabold text-navy", children: [
          "Pengiriman Barang Antar Kota dari",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Bandung" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-1 h-3 bg-orange/30 -z-0 rounded-sm" })
          ] }),
          " ",
          "dengan Respon Cepat dan Pelayanan Personal."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Kirim barang ke seluruh Jawa dengan armada mobil box kami. Terjamin tepat waktu, harga kompetitif, dan asuransi penuh." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { size: "lg", children: "Minta Penawaran via WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#layanan",
              className: "inline-flex items-center gap-1.5 h-14 px-6 rounded-full font-semibold text-navy hover:text-orange transition-colors",
              children: [
                "Lihat Layanan",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-3", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-3.5 py-2 text-[13px] font-semibold text-navy shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5 text-[var(--whatsapp)]", strokeWidth: 3 }),
              b
            ]
          },
          b
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-navy/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroPic,
            alt: "Forklift memuat barang ke truk box di area pelabuhan/gudang",
            className: "size-full object-cover object-center",
            width: 1600,
            height: 1280
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-navy/45 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 bg-white/95 backdrop-blur rounded-2xl border border-white px-4 py-3 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-orange text-orange" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm font-bold text-navy", children: SITE.googleRating.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-0.5 font-medium", children: [
            SITE.googleReviewCount,
            " Ulasan Google"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl border border-white p-4 flex items-center justify-between gap-3 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-[0.18em] text-orange", children: "RESPON CEPAT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-semibold text-navy text-sm leading-tight mt-1", children: [
              "Konsultasi gratis",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "via WhatsApp"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-11 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-orange animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-5", strokeWidth: 2.4 }) })
        ] })
      ] }) })
    ] })
  ] });
}
const items$1 = [
  { icon: Star, label: `${SITE.googleRating.toFixed(1)} Rating Google`, sub: `${SITE.googleReviewCount} ulasan` },
  { icon: Users, label: "15+ Tahun Pengalaman", sub: "Berdiri sejak 2011" },
  { icon: UsersRound, label: "Ratusan Pelanggan Terlayani", sub: "Bisnis & personal" },
  { icon: Building2, label: "Melayani B2B & B2C", sub: "Bisnis & Personal" },
  { icon: MapPinned, label: "Jawa, Sumatera, Bali & NTB", sub: "Antar kota & pulau" },
  { icon: Heart, label: "Pelayanan Personal", sub: "Solusi sesuai Anda" },
  { icon: Zap, label: "Respon Cepat", sub: "Balasan WhatsApp sigap" }
];
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Trust", className: "relative -mt-6 md:-mt-12 z-10 section-y !pt-0 md:!pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-border shadow-elegant overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8 border-b border-border bg-gradient-to-br from-navy-soft/70 to-white flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-2", children: "TRUST & REVIEWS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-2xl md:text-3xl lg:text-4xl font-bold text-navy max-w-2xl", children: "Dipercaya Ratusan Pelanggan Sejak 2011." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: SITE.googleReviewUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-navy/90 transition-colors shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-orange text-orange" }),
            "Lihat Review Google",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5 opacity-70" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 divide-y md:divide-y-0 divide-border md:divide-x", children: items$1.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-2 px-5 py-5 md:py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-10 place-items-center rounded-xl bg-orange/10 text-orange shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "size-5", strokeWidth: 2.3 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-navy leading-tight", children: it.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11.5px] text-muted-foreground mt-0.5", children: it.sub })
      ] })
    ] }, it.label)) })
  ] }) }) });
}
const problems = [
  { icon: Truck, title: "Sulit menemukan armada yang tersedia", desc: "Saat butuh mendadak, hampir semua vendor tidak punya unit yang siap." },
  { icon: PhoneCall, title: "Harus menghubungi banyak pihak", desc: "Anda buang waktu menelepon berkali-kali hanya untuk dapat satu penawaran." },
  { icon: DollarSign, title: "Harga tidak jelas", desc: "Penawaran tanpa rincian dan sering muncul biaya tambahan di belakang." },
  { icon: Radar, title: "Sulit mendapatkan update pengiriman", desc: "Tidak tahu posisi barang dan harus bertanya berulang tanpa jawaban pasti." },
  { icon: Clock, title: "Respon lambat saat dibutuhkan", desc: "Pesan dibalas berjam-jam, padahal Anda butuh kepastian sekarang juga." },
  { icon: UserX, title: "Tidak ada PIC yang bisa diandalkan", desc: "Tidak ada satu orang yang benar-benar bertanggung jawab atas pengiriman Anda." }
];
function Problems() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y bg-navy-soft/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "MASALAH UMUM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Mencari Truk Seharusnya Tidak Serumit Ini." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Jika salah satu dari ini terasa familiar, Anda tidak sendirian." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5", children: problems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative bg-white rounded-2xl border border-border p-6 hover:border-orange/40 hover:shadow-card transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-12 place-items-center rounded-xl bg-orange-soft text-orange mb-4 group-hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-6", strokeWidth: 2.2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-navy text-lg mb-1.5", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
        ]
      },
      p.title
    )) })
  ] }) });
}
const solutions = [
  { icon: Headphones, title: "Pelayanan personal", desc: "Setiap pelanggan ditangani dengan pendekatan yang menyesuaikan kebutuhan, bukan sekadar template." },
  { icon: MessageSquareText, title: "Komunikasi cepat", desc: "Tim kami merespon pesan dengan sigap, supaya Anda tidak menunggu dalam ketidakpastian." },
  { icon: Handshake, title: "Pendampingan sampai tiba", desc: "Update jelas dari penjemputan hingga barang sampai di tujuan dengan selamat." },
  { icon: Map, title: "Jangkauan luas", desc: "Jaringan menjangkau Jawa, Sumatera, Bali, Lombok, dan kota-kota besar lainnya." },
  { icon: Truck, title: "Armada sesuai kebutuhan", desc: "Granmax Box, Engkel Box, CDD Box, hingga CDD Bak siap dipilih sesuai volume Anda." },
  { icon: Users, title: "Untuk bisnis & perorangan", desc: "Melayani perusahaan, UMKM, sekaligus kebutuhan pindahan rumah, kos, dan kantor." }
];
function Solutions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "SOLUSI KAMI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Kami Membantu Anda Fokus Pada Barang, Bukan Repot Mencari Truk." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: solutions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative bg-white rounded-2xl border border-border p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-6 text-xs font-display font-bold text-navy/15", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-14 place-items-center rounded-2xl bg-navy text-white mb-5 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-6", strokeWidth: 2.2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-navy text-xl mb-2", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-muted-foreground leading-relaxed", children: s.desc })
        ]
      },
      s.title
    )) })
  ] }) });
}
const granmax = "/assets/granmax-box-DwDnYARf.jpg";
const engkel = "/assets/engkel-box-C1-Iz9UY.jpg";
const cddBox = "/assets/cdd-box-DyDCM2kQ.jpg";
const cddBak = "/assets/cdd-bak-DMeqM_Cb.jpg";
const pindahanRumah = "/assets/pindahan-rumah-EEp60LXj.jpg";
const pindahanKantor = "/assets/pindahan-kantor-x3kzgMnH.jpg";
const antarKota = "/assets/cat-antar-kota-DBIkWqaY.jpg";
const antarPulau = "/assets/cat-antar-pulau-WIouObDy.jpg";
const armada = [
  { img: antarKota, title: "Pengiriman Antar Kota", capacity: "Layanan Utama", dim: "Bandung • Jawa, Sumatera, Bali & NTB", desc: "Layanan pengiriman antar kota dari Bandung — bisnis maupun personal.", highlight: true, fit: "cover" },
  { img: antarPulau, title: "Pengiriman Antar Pulau", capacity: "Sumatera • Bali • NTB", dim: "Penyeberangan & koordinasi rute", desc: "Pengiriman antar pulau ke Sumatera, Bali, dan NTB dengan armada dan rute yang sudah teruji.", fit: "cover" },
  { img: pindahanRumah, title: "Pindahan Rumah", capacity: "Personal", dim: "Pengemasan & pemindahan", desc: "Pindahan rumah cepat, rapi, dan aman dengan tim berpengalaman.", fit: "cover" },
  { img: pindahanKantor, title: "Pindahan Kantor", capacity: "Bisnis", dim: "Minim ganggu operasional", desc: "Pindahan kantor terkoordinasi agar aktivitas bisnis Anda tetap berjalan.", fit: "cover" },
  { img: granmax, title: "Granmax Box — Pengiriman Barang Cepat", capacity: "± 800 kg", dim: "± 2.2 × 1.5 × 1.2 m • Vol. 3–4 m³", desc: "Armada ringkas untuk pengiriman volume kecil dalam kota maupun antar kota.", withDriver: true, fit: "contain" },
  { img: engkel, title: "Engkel Box — Armada Standar Kami", capacity: "± 2 Ton", dim: "± 3.0 × 1.6 × 1.6 m • Vol. 7–8 m³", desc: "Pilihan ideal untuk pengiriman menengah dengan ruang muat lebih lega.", withDriver: true, fit: "contain" },
  { img: cddBox, title: "CDD Box — Pengiriman Kapasitas Besar", capacity: "± 4 Ton", dim: "± 4.0 × 1.8 × 1.8 m • Vol. 13–14 m³", desc: "Truk box berkapasitas besar untuk pengiriman antar provinsi dan antar pulau.", withDriver: true, fit: "contain" },
  { img: cddBak, title: "CDD Bak — Material & Muatan Besar", capacity: "± 4 Ton", dim: "± 4.0 × 1.8 × 1.8 m • Vol. 13–14 m³", desc: "Bak terbuka untuk muatan besar, material, dan barang non-pecah belah.", withDriver: true, fit: "contain" }
];
function ServiceCard({ s }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: waLink(DEFAULT_WA_MESSAGE),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex flex-col bg-white rounded-3xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative aspect-[4/3] overflow-hidden ${s.fit === "contain" ? "bg-white" : "bg-navy-soft"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: s.img,
              alt: s.title,
              loading: "lazy",
              className: `size-full ${s.fit === "contain" ? "object-contain p-3" : "object-cover object-center"} group-hover:scale-105 transition-transform duration-500`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `absolute top-3 left-3 inline-flex items-center gap-1 rounded-full backdrop-blur px-3 py-1 text-[11px] font-bold tracking-wide ${s.highlight ? "bg-orange text-white" : "bg-navy/90 text-white"}`, children: [
            s.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3", strokeWidth: 2.6 }),
            s.capacity
          ] }),
          s.withDriver && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-[var(--whatsapp)]/95 backdrop-blur px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-white shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3", strokeWidth: 2.6 }),
            "Dengan Driver"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-2 grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-navy text-xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 text-navy/40 group-hover:text-orange group-hover:rotate-12 transition-all shrink-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium text-navy/60 tracking-wide", children: s.dim }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mt-1 grow", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--whatsapp)]", children: "Minta penawaran via WhatsApp" })
        ] })
      ]
    },
    s.title
  );
}
function Services() {
  const row1 = armada.slice(0, 4);
  const row2 = armada.slice(4, 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "layanan", className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "LAYANAN UTAMA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Pengiriman Barang Antar Kota & Armada Lengkap Sesuai Kebutuhan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm", children: "Tidak yakin armada mana yang sesuai? Tim kami bantu rekomendasikan setelah Anda ceritakan barangnya via WhatsApp." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 md:space-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5", children: row1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { s }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5", children: row2.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { s }, s.title)) })
    ] })
  ] }) });
}
const items = [
  { icon: Sofa, label: "Furniture" },
  { icon: ShoppingBag, label: "Barang Dagangan" },
  { icon: Package, label: "Produk FMCG" },
  { icon: HardHat, label: "Material Bangunan" },
  { icon: Cog, label: "Mesin & Peralatan" },
  { icon: Wrench, label: "Sparepart" },
  { icon: Briefcase, label: "Peralatan Kantor" },
  { icon: House, label: "Barang Pindahan Rumah" },
  { icon: Building2, label: "Barang Pindahan Kantor" },
  { icon: HardDrive, label: "Muatan Proyek" }
];
function CargoTypes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "muatan", className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "JENIS MUATAN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Barang Yang Biasa Kami Kirim." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Beragam jenis muatan kami tangani — dari kebutuhan bisnis hingga personal." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group flex flex-col items-start gap-3 rounded-2xl bg-white border border-border p-5 hover:border-orange/40 hover:shadow-card hover:-translate-y-0.5 transition-all",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-12 place-items-center rounded-xl bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "size-5", strokeWidth: 2.2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-navy text-[15px] leading-tight", children: it.label })
        ]
      },
      it.label
    )) })
  ] }) });
}
const origins = ["Bandung", "Jakarta"];
const destinations = [
  "Palembang",
  "Bengkulu",
  "Jambi",
  "Jakarta",
  "Bandung",
  "Banten",
  "Semarang",
  "Jogja",
  "Surabaya",
  "Denpasar",
  "Mataram"
];
const regions = [
  { name: "Bandung", x: "42%", y: "72%", origin: true },
  { name: "Jakarta", x: "40%", y: "68%", origin: true },
  { name: "Semarang", x: "48%", y: "72%" },
  { name: "Jogja", x: "50%", y: "76%" },
  { name: "Surabaya", x: "56%", y: "72%" },
  { name: "Palembang", x: "26%", y: "55%" },
  { name: "Jambi", x: "22%", y: "48%" },
  { name: "Bengkulu", x: "20%", y: "60%" },
  { name: "Denpasar", x: "64%", y: "78%" },
  { name: "Mataram", x: "70%", y: "78%" }
];
function ServiceArea() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "area", className: "section-y bg-navy-soft/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "AREA LAYANAN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Dari Bandung ke Jawa, Sumatera, Bali & NTB." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed", children: "Penjemputan utama dari Bandung menuju berbagai kota tujuan populer di Jawa, Sumatera, Bali, dan NTB." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold tracking-[0.18em] text-navy/60 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-3.5 text-orange" }),
            " KOTA ASAL MUAT"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: origins.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5 rounded-xl bg-white border-2 border-orange/30 px-4 py-3 text-sm font-bold text-navy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-orange shrink-0", strokeWidth: 2.6 }),
            o
          ] }, o)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold tracking-[0.18em] text-navy/60 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 text-orange" }),
            " KOTA TUJUAN POPULER"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2", children: destinations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-xl bg-white border border-border px-3 py-2.5 text-[13px] font-semibold text-navy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 text-orange shrink-0", strokeWidth: 2.6 }),
            d
          ] }, d)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground italic", children: "Konsultasikan rute Anda via WhatsApp — kami bantu cek kelayakan dan estimasi." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] rounded-3xl bg-white border border-border p-6 overflow-hidden shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--orange)_8%,transparent),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 800 460", className: "size-full", "aria-hidden": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "island2", x1: "0", x2: "1", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--navy)", stopOpacity: "0.85" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--navy)", stopOpacity: "0.45" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M60 110 Q140 80 200 140 T260 240 Q230 280 180 270 T100 220 Q60 180 60 110Z", fill: "url(#island2)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M310 130 Q400 100 450 160 T470 280 Q420 310 360 290 T310 220 Z", fill: "url(#island2)", opacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M520 140 Q560 130 570 180 T600 240 Q580 270 560 250 T540 200 Z", fill: "url(#island2)", opacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M650 180 Q720 160 760 210 T740 290 Q700 310 660 280 T630 230 Z", fill: "url(#island2)", opacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M260 320 Q340 305 420 320 T540 330 Q480 360 380 358 T260 340 Z", fill: "var(--navy)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "510", cy: "345", r: "8", fill: "var(--navy)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "560", cy: "350", r: "6", fill: "var(--navy)" })
      ] }),
      regions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1",
          style: { left: r.x, top: r.y },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid size-3 place-items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 rounded-full animate-ping ${r.origin ? "bg-orange/60" : "bg-orange/40"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative size-3 rounded-full ring-2 ring-white shadow ${r.origin ? "bg-orange" : "bg-navy"}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-navy bg-white/95 backdrop-blur px-2 py-0.5 rounded-full shadow-card flex items-center gap-1", children: [
              r.origin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange", children: "●" }),
              r.name
            ] })
          ]
        },
        r.name
      ))
    ] })
  ] }) });
}
const values = [
  {
    icon: Zap,
    title: "Respon Cepat",
    desc: "Kami memahami kebutuhan pengiriman sering bersifat mendesak. Tim kami siap merespon pesan WhatsApp Anda dengan sigap."
  },
  {
    icon: Truck,
    title: "Solusi Armada",
    desc: "Kami membantu mencarikan armada yang paling sesuai dengan kebutuhan customer — dari Granmax Box hingga CDD."
  },
  {
    icon: HeartHandshake,
    title: "Hubungan Jangka Panjang",
    desc: "Kami mengutamakan kepuasan dan hubungan baik dengan pelanggan, bukan sekadar transaksi sekali jalan."
  }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "mengapa", className: "section-y bg-navy text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 size-96 rounded-full bg-orange/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12 md:mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "MENGAPA MEMILIH KAMI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold", children: "Lebih dari sekadar jasa angkut. Kami partner logistik Anda." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 hover:bg-white/[0.07] transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-orange to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-display font-bold text-orange mb-5", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid size-14 place-items-center rounded-2xl bg-orange text-white mb-5 shadow-orange", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "size-6", strokeWidth: 2.2 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold mb-3", children: v.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 leading-relaxed text-[15px]", children: v.desc })
          ]
        },
        v.title
      )) })
    ] })
  ] });
}
function OwnerMessage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tentang", className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px mx-auto max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "TENTANG KAMI" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight", children: "Pengiriman yang Responsif, Personal, dan Berorientasi Pada Solusi." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 relative pl-7 border-l-2 border-orange/40 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-2 -left-3 size-7 text-orange bg-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-balance text-lg md:text-xl text-foreground/85 leading-relaxed font-display font-medium", children: "Sejak berdiri tahun 2011, Fauzi Transindo telah melayani ratusan pelanggan untuk kebutuhan pengiriman dan pindahan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed", children: "Kami tidak hanya menyediakan armada, tetapi juga membantu pelanggan menemukan solusi pengiriman yang paling sesuai dengan kebutuhannya — responsif, personal, dan berorientasi pada solusi." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { size: "lg", children: "Bicara langsung via WhatsApp" }) })
  ] }) }) });
}
const testimonials = [
  { category: "Pelanggan Setia", location: "", text: "Barang kiriman saya selalu datang tepat waktu dan dalam keadaan selamat tanpa cacat sedikit pun. Sudah 4 kali pakai jasa ekspedisi mereka, dan pasti akan lanjut lagi." },
  { category: "Kemitraan Bisnis", location: "", text: "Terima kasih atas kemitraan yang sudah terjalin lebih dari 4 tahun ini. Murah, tepat waktu, pelayanan ramah, dan amanah." },
  { category: "Pelanggan Personal", location: "", text: "Driver dan asistennya ramah dan suportif, kalem, nggak grasak-grusuk. Admin juga responsif 24 jam, selalu puas sama pelayanannya." },
  { category: "Testimoni Pelanggan", location: "", text: "Owner-nya ramah dan sangat membantu sekali. Terima kasih." },
  { category: "Pengiriman Antar Pulau", location: "Kupang, NTT", text: "Alhamdulillah, pengalaman kirim barang ke kos anak saya di Bandung. Saya dan anak ada di Kupang, NTT, jadi pakai jasa mobil box — barang dikemas rapi dan sampai rumah dengan aman." }
];
function Testimonials() {
  const [idx, setIdx] = reactExports.useState(0);
  const max = testimonials.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimoni", className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "TESTIMONI PELANGGAN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Dipercaya oleh bisnis dan keluarga di seluruh Indonesia." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIdx((i) => (i - 1 + max) % max),
            "aria-label": "Sebelumnya",
            className: "grid size-12 place-items-center rounded-full bg-white border border-border hover:border-orange hover:text-orange transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIdx((i) => (i + 1) % max),
            "aria-label": "Berikutnya",
            className: "grid size-12 place-items-center rounded-full bg-navy text-white hover:bg-orange transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex transition-transform duration-500 ease-out",
        style: { transform: `translateX(-${idx * 100}%)` },
        children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-full md:w-1/2 lg:w-1/3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full bg-white rounded-3xl border border-border p-7 flex flex-col gap-4 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 size-8 text-orange/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-orange text-orange" }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[15px] text-foreground/85 leading-relaxed grow", children: [
            '"',
            t.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-navy text-base", children: t.category }),
            t.location && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: t.location })
          ] })
        ] }) }, i))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1.5 mt-8", children: testimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIdx(i),
        "aria-label": `Slide ${i + 1}`,
        className: `h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-orange" : "w-1.5 bg-navy/20"}`
      },
      i
    )) })
  ] }) });
}
const steps = [
  { icon: MessageCircle, title: "Hubungi WhatsApp", desc: "Klik tombol WhatsApp dan mulai percakapan dengan tim kami." },
  { icon: ClipboardList, title: "Jelaskan Kebutuhan", desc: "Ceritakan asal, tujuan, jenis barang, dan perkiraan volume." },
  { icon: FileText, title: "Terima Penawaran", desc: "Kami berikan penawaran transparan dengan rincian yang jelas." },
  { icon: CalendarCheck2, title: "Jadwalkan Pengiriman", desc: "Konfirmasi jadwal dan titik penjemputan barang Anda." },
  { icon: Truck, title: "Barang Dikirim", desc: "Armada berangkat, posisi diupdate sampai barang tiba selamat." }
];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "proses", className: "section-y bg-navy-soft/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "CARA KERJA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "5 langkah sederhana, barang Anda berangkat." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-9 left-[6%] right-[6%] h-0.5 bg-gradient-to-r from-transparent via-orange/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex lg:flex-col items-start lg:items-center gap-4 lg:text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid size-[72px] place-items-center rounded-full bg-white border-2 border-orange/20 text-orange shadow-card relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-7", strokeWidth: 2.2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 grid size-7 place-items-center rounded-full bg-orange text-white text-xs font-display font-bold shadow-orange z-20", children: i + 1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-navy text-lg", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mt-1", children: s.desc })
        ] })
      ] }) }, s.title)) })
    ] })
  ] }) });
}
const faqs = [
  { q: "Apakah sewa armada sudah termasuk driver?", a: "Ya, semua armada kami sudah termasuk driver — Anda tidak perlu menyediakan sopir sendiri." },
  { q: "Bagaimana cara meminta penawaran?", a: "Klik tombol WhatsApp di halaman ini, ceritakan kebutuhan Anda (asal, tujuan, jenis barang, perkiraan volume), dan tim kami akan memberikan penawaran terbaik." },
  { q: "Area mana saja yang dilayani?", a: "Kami melayani penjemputan dari Bandung dengan tujuan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB." },
  { q: "Jenis armada apa saja yang tersedia?", a: "Granmax Box, Engkel Box, CDD Box, dan CDD Bak. Tim kami bantu memilih armada yang paling sesuai dengan volume dan jenis barang Anda." },
  { q: "Apakah melayani pengiriman antar pulau?", a: "Ya. Kami melayani pengiriman antar pulau ke Sumatera, Bali, dan NTB." },
  { q: "Apakah harga sudah termasuk asuransi?", a: "Untuk asuransi barang, silakan diskusikan dengan tim kami. Kami dapat membantu mengatur perlindungan tambahan sesuai nilai barang." },
  { q: "Berapa lama estimasi pengiriman?", a: "Estimasi waktu tergantung jarak dan tujuan. Tim kami akan memberikan perkiraan realistis saat mengirim penawaran." },
  { q: "Apakah ada layanan pindahan rumah dan kantor?", a: "Ya. Kami melayani pindahan rumah, pindahan kos, dan pindahan kantor — termasuk bantuan tenaga untuk loading dan unloading." },
  { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran dilakukan via transfer bank. Skema DP atau lunas akan didiskusikan saat konfirmasi pesanan." },
  { q: "Apakah saya bisa request armada mendadak?", a: "Bisa, tergantung ketersediaan. Semakin awal Anda menghubungi kami, semakin besar peluang mendapatkan armada sesuai jadwal." },
  { q: "Apakah ada update posisi barang selama pengiriman?", a: "Ya, kami memberikan update berkala kepada PIC Anda hingga barang sampai di tujuan dengan selamat." },
  { q: "Bagaimana jika barang yang dikirim sensitif atau bernilai tinggi?", a: "Informasikan ke tim kami di awal. Kami akan menyesuaikan armada, penanganan, dan rekomendasi pengamanan tambahan." },
  { q: "Apakah melayani kebutuhan rutin perusahaan?", a: "Tentu. Kami terbuka untuk kerja sama jangka panjang dengan distributor, supplier, trading, pabrik, dan UMKM." },
  { q: "Apakah bisa kirim barang dagangan dalam jumlah kecil?", a: "Bisa. Kami melayani UMKM dengan armada Granmax Box sehingga Anda tidak harus menyewa truk besar untuk volume kecil." },
  { q: "Apakah ada tenaga bantu untuk loading dan unloading?", a: "Ya, dapat kami sediakan dengan tambahan biaya yang akan disampaikan di penawaran." },
  { q: "Bagaimana jika lokasi penjemputan sulit dijangkau truk besar?", a: "Beritahu kami kondisi lokasi. Kami akan menyesuaikan jenis armada agar bisa masuk dan tetap efisien." },
  { q: "Apakah Fauzi Transindo melayani pengiriman proyek?", a: "Ya, kami menangani pengiriman peralatan, material, dan logistik proyek dengan armada yang sesuai." }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "section-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.2em] text-orange mb-3", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl md:text-4xl lg:text-5xl font-bold text-navy", children: "Pertanyaan yang sering ditanyakan." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-2xl border transition-all ${isOpen ? "border-orange/40 bg-white shadow-card" : "border-border bg-white hover:border-navy/20"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center justify-between gap-4 text-left p-5 md:p-6",
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-navy text-base md:text-lg", children: f.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid size-9 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "bg-orange text-white rotate-45" : "bg-navy-soft text-navy"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4", strokeWidth: 2.6 }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "overflow-hidden transition-all duration-300",
                style: { maxHeight: isOpen ? 360 : 0 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 md:px-6 pb-6 text-[15px] text-muted-foreground leading-relaxed", children: f.a })
              }
            )
          ]
        },
        i
      );
    }) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,color-mix(in_oklab,var(--orange)_22%,transparent),transparent_70%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-orange/25 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container-px mx-auto max-w-4xl py-20 md:py-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold tracking-[0.22em] text-orange mb-4", children: "SIAP BERANGKAT?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]", children: "Masih Mencari Truk Untuk Pengiriman Anda?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed", children: "Ceritakan kebutuhan Anda dan kami bantu mencarikan solusi yang sesuai." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WaButton, { size: "xl", children: "Hubungi via WhatsApp Sekarang" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/55", children: "Respon cepat • Penawaran transparan • Tanpa biaya konsultasi" })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-navy-deep text-white/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl py-14 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.5fr_1fr_1.3fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoUrl,
              alt: "Fauzi Transindo",
              className: "h-14 w-auto object-contain"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-white text-lg", children: "FAUZI TRANSINDO" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed max-w-sm", children: [
          SITE.tagline,
          ". Jasa pengiriman barang antar kota dari Bandung ke Jawa, Sumatera, Bali & NTB dengan pelayanan personal dan responsif."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: SITE.googleReviewUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 text-xs font-semibold text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-orange text-orange" }),
              SITE.googleRating.toFixed(1),
              " • ",
              SITE.googleReviewCount,
              " Ulasan Google"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-xs font-bold tracking-[0.18em] text-white/60 mb-2.5", children: "IKUTI KAMI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: SITE.social.instagram,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Instagram ${SITE.social.instagramHandle}`,
                className: "grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4.5", strokeWidth: 2.2 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: SITE.social.facebook,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Facebook Fauzi Transindo",
                className: "grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-4.5", strokeWidth: 2.2 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: SITE.googleReviewUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Google Business Fauzi Transindo",
                className: "grid size-10 place-items-center rounded-xl bg-white/5 hover:bg-orange border border-white/10 hover:border-orange text-white transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4.5 fill-current", strokeWidth: 2.2 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11.5px] text-white/45 mt-2", children: [
            "Instagram: ",
            SITE.social.instagramHandle
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-white mb-4 text-sm tracking-wider", children: "NAVIGASI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#layanan", className: "hover:text-orange transition-colors", children: "Layanan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#muatan", className: "hover:text-orange transition-colors", children: "Jenis Muatan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#area", className: "hover:text-orange transition-colors", children: "Area Layanan" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#mengapa", className: "hover:text-orange transition-colors", children: "Mengapa Kami" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimoni", className: "hover:text-orange transition-colors", children: "Testimoni" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-orange transition-colors", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-white mb-4 text-sm tracking-wider", children: "KONTAK" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 text-orange mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "WhatsApp: ",
              SITE.waNumberDisplay
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-orange mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${SITE.email}`, className: "hover:text-orange transition-colors", children: SITE.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-orange mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              SITE.address.line1,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              SITE.address.line2,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              SITE.address.city
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-orange mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              SITE.hours,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/45 text-xs", children: "Pesan WhatsApp tetap diterima di luar jam operasional." })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2011–2026 Fauzi Transindo. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40", children: "Pengiriman Barang Antar Kota Bandung" })
    ] })
  ] }) });
}
function FloatingWhatsApp() {
  const [showSticky, setShowSticky] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const href = waLink();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat WhatsApp",
        className: "fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[var(--whatsapp)] opacity-40 group-hover:opacity-60 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative grid size-14 md:size-16 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_18px_40px_-10px_color-mix(in_oklab,var(--whatsapp)_60%,transparent)] hover:scale-105 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6 md:size-7", strokeWidth: 2.4 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-3 rounded-2xl bg-navy text-white p-3 flex items-center justify-between gap-3 shadow-elegant border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/60 font-medium", children: "Butuh truk sekarang?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm", children: "Hubungi via WhatsApp" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-1.5 rounded-xl bg-[var(--whatsapp)] text-white px-4 py-2.5 text-sm font-semibold shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4", strokeWidth: 2.4 }),
                "Chat"
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Problems, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Solutions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "armada", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CargoTypes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "area", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceArea, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OwnerMessage, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "proses", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "faq", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "kontak", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  LandingPage as component
};
