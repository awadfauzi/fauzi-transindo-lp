import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-CDRu19dd.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fauzi Transindo — Jasa Trucking & Pindahan Terpercaya" },
      { name: "description", content: "Jasa pengiriman barang dan pindahan ke seluruh Indonesia. Pelayanan personal, aman, dan terpercaya. Konsultasi gratis via WhatsApp." },
      { name: "theme-color", content: "#1a2747" },
      { property: "og:title", content: "Fauzi Transindo — Jasa Trucking & Pindahan Terpercaya" },
      { property: "og:description", content: "Jasa pengiriman barang dan pindahan ke seluruh Indonesia. Pelayanan personal, aman, dan terpercaya. Konsultasi gratis via WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fauzi Transindo — Jasa Trucking & Pindahan Terpercaya" },
      { name: "twitter:description", content: "Jasa pengiriman barang dan pindahan ke seluruh Indonesia. Pelayanan personal, aman, dan terpercaya. Konsultasi gratis via WhatsApp." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/45577c6a-aea7-4152-986d-e3b8fc94dd5c" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/45577c6a-aea7-4152-986d-e3b8fc94dd5c" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T6P85DFJ');`
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("noscript", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-T6P85DFJ",
          height: "0",
          width: "0",
          style: { display: "none", visibility: "hidden" }
        }
      ) }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-CqM2_paJ.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Pengiriman Barang Antar Kota Bandung & Jakarta | Fauzi Transindo"
    }, {
      name: "description",
      content: "Jasa pengiriman barang antar kota dari Bandung & Jakarta dengan respon cepat dan pelayanan personal. Granmax Box, Engkel Box, CDD Box, CDD Bak ke Jawa, Sumatera, Bali & NTB. Rating Google 5.0."
    }, {
      name: "keywords",
      content: "pengiriman barang antar kota bandung, ekspedisi bandung jakarta, granmax box bandung, engkel box bandung, cdd box bandung, jasa pindahan bandung, pindahan rumah bandung"
    }, {
      property: "og:title",
      content: "Fauzi Transindo — Pengiriman Barang Antar Kota Bandung & Jakarta"
    }, {
      property: "og:description",
      content: "Respon cepat & pelayanan personal. Granmax Box, Engkel Box, CDD Box & Bak ke Jawa, Sumatera, Bali & NTB."
    }, {
      property: "og:url",
      content: "https://fauzitransindo.com"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Fauzi Transindo — Pengiriman Barang Antar Kota Bandung & Jakarta"
    }, {
      name: "twitter:description",
      content: "Respon cepat & pelayanan personal. Armada lengkap ke Jawa, Sumatera, Bali & NTB."
    }],
    links: [{
      rel: "canonical",
      href: "https://fauzitransindo.com"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "MovingCompany"],
        name: "Fauzi Transindo",
        url: "https://fauzitransindo.com",
        telephone: "+6282117207037",
        email: "fauzitransindo@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Komplek Neglasari 1, Jalan Neglasuci No. 27",
          addressLocality: "Bandung",
          addressRegion: "Jawa Barat",
          postalCode: "40611",
          addressCountry: "ID"
        },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "17:00"
        }],
        areaServed: [{
          "@type": "City",
          "name": "Bandung"
        }, {
          "@type": "State",
          "name": "Jawa Barat"
        }, {
          "@type": "State",
          "name": "Jawa Tengah"
        }, {
          "@type": "State",
          "name": "Jawa Timur"
        }, {
          "@type": "State",
          "name": "Banten"
        }, {
          "@type": "State",
          "name": "Sumatera Utara"
        }, {
          "@type": "State",
          "name": "Sumatera Selatan"
        }, {
          "@type": "State",
          "name": "Lampung"
        }, {
          "@type": "City",
          "name": "Bali"
        }, {
          "@type": "City",
          "name": "Lombok"
        }],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "63"
        },
        priceRange: "$$",
        sameAs: ["https://instagram.com/sewa_mobilbox_bandung", "https://facebook.com/fauzi.transindo"]
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "Apakah sewa armada sudah termasuk driver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, semua armada kami sudah termasuk driver — Anda tidak perlu menyediakan sopir sendiri."
          }
        }, {
          "@type": "Question",
          name: "Bagaimana cara meminta penawaran?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Klik tombol WhatsApp di halaman ini, ceritakan kebutuhan Anda (asal, tujuan, jenis barang, perkiraan volume), dan tim kami akan memberikan penawaran terbaik."
          }
        }, {
          "@type": "Question",
          name: "Area mana saja yang dilayani?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami melayani penjemputan dari Bandung dan Jakarta dengan tujuan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB."
          }
        }, {
          "@type": "Question",
          name: "Jenis armada apa saja yang tersedia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Granmax Box, Engkel Box, CDD Box, dan CDD Bak. Tim kami bantu memilih armada yang paling sesuai dengan volume dan jenis barang Anda."
          }
        }, {
          "@type": "Question",
          name: "Apakah melayani pengiriman antar pulau?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Kami melayani pengiriman antar pulau ke Sumatera, Bali, dan NTB."
          }
        }, {
          "@type": "Question",
          name: "Apakah harga sudah termasuk asuransi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Untuk asuransi barang, silakan diskusikan dengan tim kami. Kami dapat membantu mengatur perlindungan tambahan sesuai nilai barang."
          }
        }, {
          "@type": "Question",
          name: "Berapa lama estimasi pengiriman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estimasi waktu tergantung jarak dan tujuan. Tim kami akan memberikan perkiraan realistis saat mengirim penawaran."
          }
        }, {
          "@type": "Question",
          name: "Apakah ada layanan pindahan rumah dan kantor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya. Kami melayani pindahan rumah, pindahan kos, dan pindahan kantor — termasuk bantuan tenaga untuk loading dan unloading."
          }
        }, {
          "@type": "Question",
          name: "Bagaimana sistem pembayarannya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pembayaran dilakukan via transfer bank. Skema DP atau lunas akan didiskusikan saat konfirmasi pesanan."
          }
        }, {
          "@type": "Question",
          name: "Apakah saya bisa request armada mendadak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisa, tergantung ketersediaan. Semakin awal Anda menghubungi kami, semakin besar peluang mendapatkan armada sesuai jadwal."
          }
        }, {
          "@type": "Question",
          name: "Apakah ada update posisi barang selama pengiriman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami memberikan update berkala kepada PIC Anda hingga barang sampai di tujuan dengan selamat."
          }
        }, {
          "@type": "Question",
          name: "Bagaimana jika barang yang dikirim sensitif atau bernilai tinggi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Informasikan ke tim kami di awal. Kami akan menyesuaikan armada, penanganan, dan rekomendasi pengamanan tambahan."
          }
        }, {
          "@type": "Question",
          name: "Apakah melayani kebutuhan rutin perusahaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tentu. Kami terbuka untuk kerja sama jangka panjang dengan distributor, supplier, trading, pabrik, dan UMKM."
          }
        }, {
          "@type": "Question",
          name: "Apakah bisa kirim barang dagangan dalam jumlah kecil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bisa. Kami melayani UMKM dengan armada Granmax Box sehingga Anda tidak harus menyewa truk besar untuk volume kecil."
          }
        }, {
          "@type": "Question",
          name: "Apakah ada tenaga bantu untuk loading dan unloading?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, dapat kami sediakan dengan tambahan biaya yang akan disampaikan di penawaran."
          }
        }, {
          "@type": "Question",
          name: "Bagaimana jika lokasi penjemputan sulit dijangkau truk besar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beritahu kami kondisi lokasi. Kami akan menyesuaikan jenis armada agar bisa masuk dan tetap efisien."
          }
        }, {
          "@type": "Question",
          name: "Apakah Fauzi Transindo melayani pengiriman proyek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami menangani pengiriman peralatan, material, dan logistik proyek dengan armada yang sesuai."
          }
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
