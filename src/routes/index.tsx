import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { Services } from "@/components/landing/Services";
import { CargoTypes } from "@/components/landing/CargoTypes";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { WhyUs } from "@/components/landing/WhyUs";
import { OwnerMessage } from "@/components/landing/OwnerMessage";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sewa Mobil Box & Truk dengan Sopir Bandung | Fauzi Transindo" },
      { name: "description", content: "Sewa mobil box dan truk dengan sopir dari Bandung & Jakarta. Sistem FTL: satu armada khusus, bukan ekspedisi per kg. Granmax, CDE Engkel, dan CDD Dobel untuk angkutan barang serta pindahan." },
      { name: "keywords", content: "sewa mobil box bandung, sewa truk bandung, sewa engkel box bandung, sewa cdd bandung, jasa trucking bandung, angkutan barang antarkota, jasa pindahan bandung" },
      { property: "og:title", content: "Fauzi Transindo — Sewa Mobil Box & Truk dengan Sopir Bandung" },
      { property: "og:description", content: "Sewa satu armada khusus (FTL) dengan sopir: Granmax, CDE Engkel, CDD Dobel. Bukan pengiriman paket per kg." },
      { property: "og:url", content: "https://fauzitransindo.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fauzi Transindo — Pengiriman Barang Antar Kota Bandung & Jakarta" },
      { name: "twitter:description", content: "Sewa mobil box dan truk dengan sopir untuk angkut barang, distribusi, dan pindahan antarkota." },
    ],
    links: [{ rel: "canonical", href: "https://fauzitransindo.com" }],
    scripts: [
      {
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
            addressCountry: "ID",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          areaServed: [
            {"@type": "City", "name": "Bandung"},
            {"@type": "State", "name": "Jawa Barat"},
            {"@type": "State", "name": "Jawa Tengah"},
            {"@type": "State", "name": "Jawa Timur"},
            {"@type": "State", "name": "Banten"},
            {"@type": "State", "name": "Sumatera Utara"},
            {"@type": "State", "name": "Sumatera Selatan"},
            {"@type": "State", "name": "Lampung"},
            {"@type": "City", "name": "Bali"},
            {"@type": "City", "name": "Lombok"},
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "63",
          },
          priceRange: "$$",
          sameAs: [
            "https://instagram.com/sewa_mobilbox_bandung",
            "https://facebook.com/fauzi.transindo",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Apakah sewa armada sudah termasuk driver?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, semua armada kami sudah termasuk driver — Anda tidak perlu menyediakan sopir sendiri.",
              },
            },
            {
              "@type": "Question",
              name: "Bagaimana cara meminta penawaran?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Klik tombol WhatsApp dan informasikan asal, tujuan, jenis barang, serta ukuran atau perkiraan volume muatan. Kami akan memberikan penawaran sewa armada sesuai kebutuhan Anda.",
              },
            },
            {
              "@type": "Question",
              name: "Area mana saja yang dilayani?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kami melayani penjemputan dari Bandung dan Jakarta dengan tujuan ke berbagai kota di Jawa, Sumatera, Bali, dan NTB.",
              },
            },
            {
              "@type": "Question",
              name: "Jenis armada apa saja yang tersedia?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Granmax Box, Engkel Box, CDD Box, dan CDD Bak. Tim kami bantu memilih armada yang paling sesuai dengan volume dan jenis barang Anda.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah melayani pengiriman antar pulau?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya. Kami melayani pengiriman antar pulau ke Sumatera, Bali, dan NTB.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah harga sudah termasuk asuransi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Untuk asuransi barang, silakan diskusikan dengan tim kami. Kami dapat membantu mengatur perlindungan tambahan sesuai nilai barang.",
              },
            },
            {
              "@type": "Question",
              name: "Berapa lama estimasi pengiriman?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Estimasi waktu tergantung jarak dan tujuan. Tim kami akan memberikan perkiraan realistis saat mengirim penawaran.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah ada layanan pindahan rumah dan kantor?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya. Kami melayani pindahan rumah, pindahan kos, dan pindahan kantor — termasuk bantuan tenaga untuk loading dan unloading.",
              },
            },
            {
              "@type": "Question",
              name: "Bagaimana sistem pembayarannya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Pembayaran dilakukan via transfer bank. Skema DP atau lunas akan didiskusikan saat konfirmasi pesanan.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah saya bisa request armada mendadak?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bisa, tergantung ketersediaan. Semakin awal Anda menghubungi kami, semakin besar peluang mendapatkan armada sesuai jadwal.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah ada update posisi barang selama pengiriman?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, kami memberikan update berkala kepada PIC Anda hingga barang sampai di tujuan dengan selamat.",
              },
            },
            {
              "@type": "Question",
              name: "Bagaimana jika barang yang dikirim sensitif atau bernilai tinggi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Informasikan ke tim kami di awal. Kami akan menyesuaikan armada, penanganan, dan rekomendasi pengamanan tambahan.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah melayani kebutuhan rutin perusahaan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tentu. Kami terbuka untuk kerja sama jangka panjang dengan distributor, supplier, trading, pabrik, dan UMKM.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah bisa menyewa armada meskipun muatan belum penuh?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bisa. Sistem kami adalah sewa satu armada khusus dengan sopir (FTL), meskipun muatan tidak memenuhi seluruh kapasitas. Kami tidak melayani pengiriman paket atau tarif per kg. Untuk muatan kecil, tersedia pilihan Granmax Box.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah ada tenaga bantu untuk loading dan unloading?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, dapat kami sediakan dengan tambahan biaya yang akan disampaikan di penawaran.",
              },
            },
            {
              "@type": "Question",
              name: "Bagaimana jika lokasi penjemputan sulit dijangkau truk besar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Beritahu kami kondisi lokasi. Kami akan menyesuaikan jenis armada agar bisa masuk dan tetap efisien.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah Fauzi Transindo melayani pengiriman proyek?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, kami menangani pengiriman peralatan, material, dan logistik proyek dengan armada yang sesuai.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <Solutions />
      <div id="armada"><Services /></div>
      <CargoTypes />
      <div id="area"><ServiceArea /></div>
      <WhyUs />
      <OwnerMessage />
      <Testimonials />
      <div id="proses"><Process /></div>
      <div id="faq"><FAQ /></div>
      <div id="kontak"><FinalCTA /></div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}