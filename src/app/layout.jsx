import "./globals.css";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: "PIONIR KESATRIA 2025",
  description:
    "PPSMB Kesatria merupakan masa orientasi kepada Mahasiswa Baru Teknik UGM 2023 yang bertujuan untuk memperkenalkan lingkungan Teknik UGM kepada para Mahasiswa Baru",
};

export default function RootLayout({ children }) {
  return (
    <html className="!overflow-x-hidden" lang="en">
      <head>
        <link rel="icon" href="/logo_cream.png" />
      </head>
      <body
        className={`z-[-10] bg-pattern-parang-krem bg-[size:50%] bg-repeat sm:bg-[size:37%] lg:bg-[size:25%]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
