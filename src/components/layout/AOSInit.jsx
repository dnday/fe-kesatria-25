"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: false, // supaya animasi bisa muncul tiap scroll
      duration: 800,
    });
  }, []);

  useEffect(() => {
    // Setiap kali route berubah, refresh animasi AOS
    AOS.refreshHard(); // atau AOS.refresh()
  }, [pathname]);

  return null;
};

export default AOSInit;
