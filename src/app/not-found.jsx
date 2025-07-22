"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Custom404() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className="text-[8vw] font-bold text-[#A01326]"
        data-aos="fade-down"
        data-aos-offset="200"
      >
        404
      </h1>
      <p
        className="mt-[-2.5vw] text-[1.5vw] font-bold text-[#013047]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Page Not Found
      </p>
      <a
        href="/"
        className="mt-6 text-[1vw] text-blue-500 hover:underline"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Go back to home
      </a>
    </div>
  );
}
