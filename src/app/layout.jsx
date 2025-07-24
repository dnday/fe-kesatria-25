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
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2023 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function RootLayout({ children }) {
  return (
    <html className="!overflow-x-hidden w-full" lang="en">
      <head>
        <link rel="icon" href="/images/logo/logo_yellow.svg" />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/PrimeformProDemo/PrimeformProDemo-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PrimeformProDemo/PrimeformProDemo-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/storybook/Storybook.TTF"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Preload critical background image */}
        <link rel="preload" href="/images/background/pattern-parang-krem.svg" as="image" />
        {/* Critical CSS inline */}
        <style>{`
          .font-storybook{font-family:'Storybook',Arial,sans-serif}
          .font-primeform{font-family:'PrimeformPro',Arial,sans-serif}
          .font-primeform-medium{font-family:'PrimeformPro',Arial,sans-serif;font-weight:500}
          .font-primeform-bold{font-family:'PrimeformPro',Arial,sans-serif;font-weight:700}
          .overflow-x-hidden{overflow-x:hidden}
          .min-h-screen{min-height:100vh}
          @font-face{font-family:'PrimeformPro';src:url('/fonts/PrimeformProDemo/PrimeformProDemo-Regular.otf') format('opentype');font-weight:normal;font-style:normal;font-display:swap}
          @font-face{font-family:'PrimeformPro';src:url('/fonts/PrimeformProDemo/PrimeformProDemo-Bold.otf') format('opentype');font-weight:bold;font-style:normal;font-display:swap}
          @font-face{font-family:'Storybook';src:url('/fonts/storybook/Storybook.TTF') format('truetype');font-weight:normal;font-style:normal;font-display:swap}
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
