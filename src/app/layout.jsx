import "./globals.css";
import "../style/animation.css";
import Navbar from "../components/layout/navbar.jsx";
import Footer from "../components/layout/footer.jsx";
import AOSInit from "@/components/layout/AOSInit";
import WebVitals from "@/components/common/WebVitals";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const metadata = {
  title: "PIONIR KESATRIA 2025",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2025 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function RootLayout({ children }) {
  return (
    <html className="!overflow-x-hidden w-full" lang="en">
      <head>
        <link rel="icon" href="/images/logo/logo_yellow.svg" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/PrimeformProDemo/PrimeformProDemo-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/images/background/pattern-parang-krem.svg"
          as="image"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//ft-digitaltwin3d.id" />
        {/* Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
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
        <AOSInit />
        <WebVitals />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
