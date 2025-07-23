"use client";
import { lazy, Suspense } from "react";
import { useEffect } from "react";

// Lazy load heavy components
const Chapter1 = lazy(() => import("@/components/beranda/Chapter1"));
const Chapter2 = lazy(() => import("@/components/beranda/chapter2"));
const Chapter3 = lazy(() => import("@/components/beranda/chapter3"));
const SelamatDatang = lazy(() => import("@/components/beranda/SelamatDatang"));
const SelamatDatangVideo = lazy(() =>
  import("@/components/beranda/SelamatDatangVideo")
);
const AgendaAtribut = lazy(() => import("@/components/beranda/agendaAtribut"));

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-64 w-full rounded mb-4"></div>
);

export default function Home() {
  // Preload critical components
  useEffect(() => {
    const timer = setTimeout(() => {
      // Preload the next components after initial render
      import("@/components/beranda/Chapter1");
      import("@/components/beranda/chapter2");
    }, 100);

    return () => clearTimeout(timer);
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

      {/* Critical above-the-fold content */}
      <Suspense fallback={<LoadingSkeleton />}>
        <SelamatDatang />
      </Suspense>

      {/* Below-the-fold content with lazy loading */}
      <Suspense fallback={<LoadingSkeleton />}>
        <SelamatDatangVideo />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Chapter1 />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Chapter2 />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Chapter3 />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <AgendaAtribut />
      </Suspense>
    </main>
  );
}
