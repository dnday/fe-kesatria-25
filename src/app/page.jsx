"use client";
import Chapter1 from "@/components/beranda/Chapter1";
import Chapter2 from "@/components/beranda/chapter2";
import Chapter3 from "@/components/beranda/chapter3";
import SelamatDatang from "@/components/beranda/SelamatDatang";
import SelamatDatangVideo from "@/components/beranda/SelamatDatangVideo";
import AgendaAtribut from "@/components/beranda/agendaAtribut";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Preload critical images untuk optimasi loading
    const preloadImages = () => {
      const criticalImages = [
        '/images/footer/tugu.png',
        '/images/footer/kainBiru.png',
        '/images/footer/burung.png',
        '/images/footer/merahKiri.png',
        '/images/footer/merahKanan.png',
        '/images/footer/gir.png',
        '/images/footer/title2.png',
        '/images/background/pattern-parang-krem.svg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    // Force assets reload untuk iframe compatibility
    const handleAssets = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.complete) {
          const src = img.src;
          img.src = '';
          img.src = src;
        }
      });
    };

    // Delay untuk memastikan DOM ready
    setTimeout(() => {
      preloadImages();
      handleAssets();
    }, 100);
    
    // Handle iframe scroll detection
    const isInIframe = window !== window.parent;
    if (isInIframe) {
      document.body.setAttribute('data-iframe', 'true');
    }
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <title>Pionir Kesatria 2025</title>
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
    </main>
  );
}
