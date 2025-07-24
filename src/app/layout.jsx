import "./globals.css";
import "../style/animation.css";
import Navbar from "../components/layout/navbar.jsx";
import Footer from "../components/layout/footer.jsx";
import AOSInit from "@/components/layout/AOSInit";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const metadata = {
  title: "PIONIR KESATRIA 2025",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2025 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
  keywords: "Pionir, Kesatria, FT, UGM, Teknik, PPSMB, Maba, 2025",
  icons: {
    icon: "/images/logo/logo_yellow.svg",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html className="!overflow-x-hidden w-full" lang="id">
      <head>
        {/* Preconnect untuk optimasi loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />

        {/* Critical CSS untuk font display */}
        <style jsx global>{`
          * {
            font-display: swap;
          }

          /* Critical above-the-fold styles */
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}</style>
      </head>
      <body
        className={
          "z-[-10] bg-pattern-parang-kreme bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] w-full overflow-x-hidden"
        }
        style={{
          backgroundImage: `url('/images/background/pattern-parang-krem.svg')`,
          backgroundSize: "100%, 100%, 100%",
        }}
      >
        <AOSInit /> {/* Inisialisasi */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
