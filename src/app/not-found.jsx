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
        className="text-[8vw] font-bold text-[#A01326] font-storybook"
        data-aos="fade-down"
        data-aos-offset="200"
      >
        404
      </h1>
      <p
        className="mt-[-2.5vw] text-[1.5vw] font-bold text-[#013047] font-primeform"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Page Not Found
      </p>
      <a
        href="/"
        className="mt-6 text-[1vw] bg-[#A01326] text-[#F9C157] font-primeform px-[4vw] py-[2vw] rounded-4xl sm:text-[1.5vw] sm:py-[1vw] sm:px-[2vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Go back to home
      </a>
    </div>
  );
}
