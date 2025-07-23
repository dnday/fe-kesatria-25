"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Lazy load AOS to reduce initial bundle size
    const loadAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        await import("aos/dist/aos.css");

        AOS.init({
          once: false, // supaya animasi bisa muncul tiap scroll
          duration: 1000,
          disable: "mobile", // Disable on mobile to improve performance
        });
      }
    };

    loadAOS();
  }, []);

  useEffect(() => {
    // Setiap kali route berubah, refresh animasi AOS
    const refreshAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.refreshHard(); // atau AOS.refresh()
      }
    };

    refreshAOS();
  }, [pathname]);

  return null;
};

export default AOSInit;
