"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Peta() {
  return (
    <div className="min-h-screen pb-[20vw] relative">
      {/* Kain Merah dengan wrapper untuk responsivitas yang lebih baik */}
      <div
        className="absolute z-10 w-full flex justify-start"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <Image
          src="/images/peta/kainmerah.png"
          alt="Kain Merah"
          width={1920}
          height={1080}
          className="w-[55vw] h-[30vw] sm:w-[50vw] sm:h-[35vw] md:w-[50vw] md:h-[25vw] lg:w-[40vw] lg:h-[20vw] object-cover object-left transform @max-xs:-translate-y-[1vw] -translate-y-[5vw] sm:-translate-y-[8vw] md:-translate-y-[5vw] lg:-translate-y-[3vw]"
          draggable={false}
        />
      </div>
      <Image
        src="/images/peta/tugtekbg.png"
        alt="Tugu Teknik UGM"
        width={1000}
        height={1000}
        className="w-[25vw] h-[40vw] sm:w-[20vw] sm:h-[30vw] md:w-[20vw] md:h-[30vw] lg:w-[20vw] lg:h-[30vw] object-cover absolute right-5 sm:right-35 translate-y-[12vw] sm:translate-y-[10vw] z-[10]"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-delay="200"
        draggable={false}
      />
      {/* Dekorasi Kuning dengan wrapper untuk responsivitas yang lebih baik */}
      <div
        className="absolute top-0 right-0 z-[11] w-full flex justify-end"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <Image
          src="/images/peta/dekorasikuning.png"
          alt="Dekorasi Kuning"
          width={1000}
          height={1000}
          className="w-[40%] h-[70%] sm:w-[32%] sm:h-[55%] md:w-[30%] md:h-[52%] lg:w-[28%] lg:h-[50%] object-cover object-right transform -translate-y-[15vw] sm:-translate-y-[10vw] md:-translate-y-[9vw] lg:-translate-y-[8vw]"
          draggable={false}
        />
      </div>
      {/* Dekorasi Merah dengan wrapper untuk responsivitas yang lebih baik */}
      <div
        className="absolute top-0 right-0 z-[12] w-full flex justify-end"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="400"
      >
        <Image
          src="/images/peta/dekorasimerah.png"
          alt="Dekorasi Merah"
          width={1000}
          height={1000}
          className="w-[30%] h-[50%] sm:w-[23%] sm:h-[37%] md:w-[22%] md:h-[35%] lg:w-[20%] lg:h-[32%] object-cover object-right transform -translate-y-[12vw] sm:-translate-y-[8vw] md:-translate-y-[7.5vw] lg:-translate-y-[7vw]"
          draggable={false}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-8 mt-6 sm:mt-8 md:mt-8 lg:mt-4 relative z-[100]">
        {/* Desktop: Text on right, Mobile/Tablet: Text above */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mx-2 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-16 my-2 sm:my-3 md:my-4 lg:my-4 lg:gap-8 mt-4 sm:mt-6 md:mt-8 lg:mt-20">
          {/* Text container - positioned above on mobile/tablet, right on desktop */}
          <div
            className="w-full lg:w-1/3 xl:w-1/4 lg:pl-6 xl:pl-8 relative z-[110] order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-storybook text-[#013047] text-center lg:text-right mb-2 mt-5 sm:mb-3 md:mb-4">
              3D Maps Fakultas Teknik
            </h1>
            <div className="flex justify-center lg:justify-end mt-4">
              <a
                href="https://maps.google.com/maps?q=Fakultas+Teknik+UGM&hl=id&ll=-7.770456,110.377930&spn=0.005,0.005&t=k&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#A01326] text-[#F9C157] font-storybook px-[4vw] py-[2vw] rounded-4xl text-[3vw] sm:text-[1.5vw] sm:py-[1vw] sm:px-[2vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer transition-colors duration-300"
              >
                3D Maps
              </a>
            </div>
          </div>

          {/* Map container - scaled proportionally for each breakpoint */}
          <div
            className="w-full max-w-[92%] sm:max-w-[88%] md:max-w-[95%] lg:max-w-4xl xl:w-2/3 xl:max-w-5xl relative z-[120] order-2 lg:order-1 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <iframe
              className="w-full h-[240px] sm:h-[300px] md:h-[450px] lg:h-[420px] xl:h-[500px] rounded-lg border-4 relative z-[130]"
              style={{ borderColor: "#A01326" }}
              src="https://ft-digitaltwin3d.id/"
              frameBorder="0"
              allowFullScreen
            ></iframe>

            {/* Subtitle dengan bahasa yang lebih jelas */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="mt-2 sm:mt-2 md:mt-3 relative z-[110]"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-[#013047] font-primeform-medium font-bold opacity-90 rounded-lg py-2 px-4 mb-6">
                Nikmati Pengalaman Terbaik dengan Desktop/PC 💻
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
