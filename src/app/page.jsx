"use client";
import Chapter1 from "@/components/beranda/chapter1";
import Chapter2 from "@/components/beranda/chapter2";
import Chapter3 from "@/components/beranda/chapter3";
import SelamatDatang from "@/components/beranda/selamatdatang";
import SelamatDatangVideo from "@/components/beranda/selamatdatangvideo";
import AgendaAtribut from "@/components/beranda/agendaAtribut";
// import Footer from "@/components/layout/footer";

import { useEffect } from "react";
// import AOS from "aos";

export default function Home() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 700, // Durasi animasi dalam milidetik
  //     });
  //   }, []);
  return (
    <main className="min-h-screen">
      <title>Pionir Kesatria 2024</title>
      <meta
        name="description"
        content="Kegiatan Penerimaan Mahasiswa Baru Fakultas Teknik UGM Tahun 2025"
      />
      <meta
        name="keywords"
        content="Pionir, Kesatria, FT, UGM, Teknik, PPSMB, Maba"
      />
      <link rel="icon" href="/images/logo/logo_yellow.svg" />
      <SelamatDatang />
      <SelamatDatangVideo />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <AgendaAtribut />
      {/* <Footer />
      <iframe
        className="fixed top-[80px] left-[50px] bottom-[50px] w-[900vw] h-[900vh] border-none"
        src="https://ft-digitaltwin3d.id/"
        frameBorder="0"
        allowFullScreen
        style={{ zIndex: 9999 }}
      >
        <a href="https://ft-digitaltwin3d.id/">
          FT Digital Twin 3D - Fakultas Teknik UGM
        </a>
      </iframe>
      {/* <iframe
        frameborder="0"
        src="https://itch.io/embed/2382211"
        width="552"
        height="167"
      >
        <a href="https://yudhantoa.itch.io/mustadam-project">
          Visualisasi Model 3D Masjid Al Mustadam FT UGMM by yudhantoa
        </a>
      </iframe> */}
    </main>
  );
}
