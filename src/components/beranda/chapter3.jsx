import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTENT = [
  {
    title: "Bagian III: Kesatria Muda Berkarya",
    titleTab: "Bagian III: Kesatria Muda Berkarya",
    titleHP: ["Bagian 3:", "Karya Aplikatif"],
    titleDesc:
      "Tentunya kesatria muda sebagai calon-calon insinyur muda akan menghadapi masalah-masalah yang terjadi di Indonesia baik itu dari sektor manufaktur, infrastruktur, dan energi. Di bagian 3 ini, kesatria muda akan mengerjakan sebuah masalah keteknikan yang mana nantinya akan melatih kemampuan berpikir kritis, problem solving, dan kerja sama.",
    subtitle1: "Karya Aplikatif",
    subtitle1desc:
      "Para kesatria muda diharapkan mampu mengaplikasikan pengetahuan dan keterampilan yang relevan serta pemahaman mendalam mengenai  jurusan Teknik yang kesatria muda ambil untuk kontribusi mereka bagi bangsa dan negara di masa depan.",
    subtitle2: "Karya Aplikatif",
    subtitle2desc:
      "Sebagai calon insinyur, Kesatria Muda diharapkan mampu mengaplikasikan pengetahuan yang didapat selama menempuh perkuliahan untuk menyelesaikan masalah-masalah yang ada di masyarakat, baik di bidang infrastruktur, energi, manufaktur, lingkungan, teknologi, maupun sosial kemasyarakatan. Kesatria Muda diharapkan dapat menghasilkan ide-ide kreatif dan inovatif dalam merespons tantangan zaman yang semakin kompleks.",
  },
];

const JudulChapter = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-[0.25vw] items-center max-lg:max-w-[65vw] max-sm:hidden"
    >
      <h1 className="font-storybook text-[6vw] sm:text-[5.5vw] md:text-[5vw] lg:text-[4.8vw] xl:text-[4vw] text-[#013047]">
        Bagian 3:
      </h1>
      <h1 className="font-storybook text-[6vw] sm:text-[5.5vw] md:text-[5vw] lg:text-[4.8vw] xl:text-[4vw] text-[#013047]">
        Karya Aplikatif
      </h1>
      <p className="text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)] font-medium max-w-[80%] mx-auto max-sm:max-w-[90%]">
        {CONTENT[0].titleDesc}
      </p>
    </div>
  );
};

const JudulChapterHP = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex w-full flex-col place-content-center items-center gap-[2.5vw] text-center sm:hidden"
    >
      <h1 className="font-storybook text-[7vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[5vw]">
        <span className="text-[#013047]">{CONTENT[0].titleHP[0]}</span>
        <br />
        <span className="text-[#013047]">{CONTENT[0].titleHP[1]}</span>
      </h1>
      <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
        {CONTENT[0].titleDesc}
      </p>
    </div>
  );
};

const KesatriaMudaBerkarya = () => {
  return (
    <>
      {/* Desktop Version - lg: and up */}
      <div className="hidden lg:flex w-full items-center justify-between">
        {/* Text Section */}
        <div
          data-aos="fade-right"
          className="flex max-w-[40vw] flex-col gap-[1vw]"
        >
          {/* Header with title and button aligned */}
          <div className="flex items-center justify-between mb-[1vw]">
            <h2 className="font-storybook text-[4vw] sm:text-[3.8vw] md:text-[3.5vw] lg:text-[3.2vw] xl:text-[3vw] text-[#013047]">
              {CONTENT[0].subtitle1}
            </h2>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
              }
              className="w-[16.5vw] rounded-[2vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <p className="z-[10] text-[#F9C157] text-center font-storybook text-[2.5vw] sm:text-[2.3vw] md:text-[2.1vw] lg:text-[2vw]">
                Baca Modul
              </p>
            </Link>
          </div>
          <p className="text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
            {CONTENT[0].subtitle1desc}
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          data-aos="fade-left"
          className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center overflow-hidden cursor-pointer"
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            boxShadow: "0 0.2vw 2vw rgba(255, 209, 99, 0.6)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 2,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="justify-center items-center flex"
          >
            <Image
              className="w-[80%] aspect-auto object-cover"
              alt="Image"
              src={"/nalatugtek.svg"}
              width={1000}
              height={1000}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Tablet Version - md: to lg: */}
      <div className="flex w-[80vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
        <div
          data-aos="fade-up"
          className="flex w-full flex-col items-center gap-[2vw]"
        >
          <h2 className="text-[#013047] font-storybook text-[6vw] sm:text-[5.5vw] md:text-[5.2vw] lg:text-[5vw] text-center">
            {CONTENT[0].subtitle1}
          </h2>
          <p className="max-w-[75vw] text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)] text-center">
            {CONTENT[0].subtitle1desc}
          </p>
          <div className="mt-[3vw] flex w-full flex-col items-center justify-center gap-[3vw] lg:hidden">
            {/* <Image
              className="absolute left-0 w-[50vw] translate-y-[5vw]"
              alt=""
              src={"/images/assets_beranda_chapter3_pitaungu_kiri.svg"}
              width={1965}
              height={880}
            />
            <Image
              className="absolute right-0 w-[50vw] translate-y-[5vw]"
              alt=""
              src={"/images/assets_beranda_chapter3_pitaungu_kanan.svg"}
              width={1965}
              height={880}
            /> */}
            <motion.div
              className="z-[1] h-[28vw] w-[45vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center overflow-hidden cursor-pointer"
              whileHover={{
                scale: 1.03,
                rotateX: 5,
                boxShadow: "0 0.3vw 2.5vw rgba(255, 209, 99, 0.5)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: -3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="justify-center items-center flex w-full h-full"
              >
                <Image
                  className="w-[70%] aspect-auto object-cover"
                  alt=""
                  src={"/nalatugtek.svg"}
                  width={1000}
                  height={1000}
                />
              </motion.div>
            </motion.div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
              }
              className=" w-[30vw] rounded-[3.5vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <p className="text-[#F9C157] text-center font-storybook text-[4vw] sm:text-[3.8vw] md:text-[3.5vw] lg:text-[3vw] py-[1vw]">
                Baca Modul
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version - max-sm: */}
      <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
        <div
          data-aos="fade-up"
          className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden"
        >
          <h2 className="font-storybook text-[7vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[5vw] text-[#013047] text-center">
            {CONTENT[0].subtitle1}
          </h2>
          <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
            {CONTENT[0].subtitle1desc}
          </p>
        </div>
        <motion.div data-aos="fade-up" className="relative h-[41.2vw] w-[70vw]">
          <motion.div
            className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-[#013047] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)] p-[2vw] flex items-center justify-center overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.02,
              rotateZ: 1,
              boxShadow: "0 0.6vw 3vw rgba(255, 209, 99, 0.4)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="justify-center items-center flex w-full h-full"
            >
              <Image
                className="w-[70%] aspect-auto object-cover"
                alt="Image"
                src={"/nalatugtek.svg"}
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
            }
            className="z-[1] rounded-[3.5vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            <p className="z-[10] text-[#F9C157] text-center font-storybook text-[5vw] sm:text-[4.5vw] md:text-[4.2vw] lg:text-[4vw] px-[7vw] py-[0.5vw]">
              Baca Modul
            </p>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

const KaryaAplikatif = () => {
  return (
    <div className="flex w-full items-center justify-between max-lg:hidden">
      <motion.div
        data-aos="fade-right"
        className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center overflow-hidden cursor-pointer"
        whileHover={{
          scale: 1.05,
          rotateY: -5,
          boxShadow: "0 0.2vw 2vw rgba(255, 209, 99, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: -2,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="justify-center items-center flex w-full h-full"
        >
          <Image
            className="w-[50%] aspect-auto object-cover"
            alt=""
            src={"/nala1.svg"}
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>
      <div
        data-aos="fade-left"
        className="flex max-w-[40vw] flex-col gap-[1vw] items-start"
      >
        {/* <h2 className="font-storybook text-[3vw] text-[#013047] max-lg:text-[3.8vw] ">
          {CONTENT[0].subtitle2}
        </h2> */}
        <p className="text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          {CONTENT[0].subtitle2desc}
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
          }
          className="w-[16.5vw] rounded-[2vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
        >
          <p className="z-[10] text-[#F9C157] text-center font-storybook text-[2.5vw] sm:text-[2.3vw] md:text-[2.1vw] lg:text-[2vw]">
            Baca Modul
          </p>
        </Link>
      </div>
    </div>
  );
};

// const KesatriaMudaBerkaryaTab = () => {
//   return (
//     <div className="flex w-[71vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
//       <div
//         data-aos="fade-up"
//         className="flex w-full flex-col items-center gap-[1vw]"
//       >
//         <h2 className="text-[#013047] font-storybook">
//           {CONTENT[0].subtitle1}
//         </h2>
//         <p className="max-w-[65vw] text-justify font-primeform-medium text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
//           {CONTENT[0].subtitle1desc}
//         </p>
//         <div className="mt-[2vw] flex w-full flex-col items-center justify-center gap-[2vw] lg:hidden">
//           <Image
//             className="absolute left-0 w-[50vw] translate-y-[5vw]"
//             alt=""
//             src={"/images/assets_beranda_chapter3_pitaungu_kiri.svg"}
//             width={1965}
//             height={880}
//           />
//           <Image
//             className="absolute right-0 w-[50vw] translate-y-[5vw]"
//             alt=""
//             src={"/images/assets_beranda_chapter3_pitaungu_kanan.svg"}
//             width={1965}
//             height={880}
//           />
//           <div className="z-[1] h-[23.2vw] w-[39.7vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center">
//             {/* Tablet */}
//             <Image
//               className="w-[40%] aspect-auto object-cover "
//               alt=""
//               src={"/nalatugtek.svg"}
//               width={1000}
//               height={1000}
//             />
//           </div>
//           <Link
//             href={"/materi/1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr"}
//             className="z-[1] w-[26.9vw] rounded-[3.5vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] hover:from-[#FFA514] hover:to-[#FFD23F]"
//           >
//             <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-center font-story">
//               Lihat Modul
//             </p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

const KaryaAplikatifTab = () => {
  return (
    <div className="flex w-[80vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center gap-[2vw]"
      >
        {/* <h2 className="text-[#013047] font-storybook text-[4.5vw]">
          {CONTENT[0].subtitle2}
        </h2> */}
        <p className="max-w-[75vw] text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)] text-center">
          {CONTENT[0].subtitle2desc}
        </p>
        <div className="mt-[3vw] flex w-full flex-col items-center justify-center gap-[3vw] lg:hidden">
          {/* <Image
            className="absolute left-0 w-[50vw] translate-y-[5vw]"
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kiri.svg"}
            width={1965}
            height={880}
          />
          <Image
            className="absolute right-0 w-[50vw] translate-y-[5vw]"
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kanan.svg"}
            width={1965}
            height={880}
          /> */}
          <motion.div
            className="z-[1] h-[28vw] w-[45vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.03,
              rotateX: -5,
              boxShadow: "0 0.3vw 2.5vw rgba(255, 209, 99, 0.5)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Tablet */}
            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="justify-center items-center flex w-full h-full"
            >
              <Image
                className="w-[45%] aspect-auto object-cover "
                alt=""
                src={"/nala1.svg"}
                width={1000}
                height={1000}
              />
            </motion.div>
          </motion.div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
            }
            className="z-[1] w-[30vw] rounded-[3.5vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            <p className="text-[#F9C157] text-center font-storybook py-[1vw]">
              Baca Modul
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// const KesatriaMudaBerkaryaHP = () => {
//   return (
//     <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
//       <div
//         data-aos="fade-up"
//         className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden"
//       >
//         <h1 className="font-storybook text-[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
//           <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA51">
//             {CONTENT[0].subtitle1}
//           </span>
//         </h1>
//         <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
//           {CONTENT[0].subtitle1desc}
//         </p>
//       </div>
//       <div data-aos="fade-up" className="relative h-[41.2vw] w-[70vw]">
//         <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)] flex items-center justify-center">
//           <Image
//             className="w-[40%] aspect-auto object-cover "
//             alt=""
//             src={"/nalatugtek.svg"}
//             width={1000}
//             height={1000}
//           />
//         </div>
//         <div className="absolute z-0 w-full translate-x-[-30vw] scale-[0.35]">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "linear",
//             }}
//           >
//             <Image
//               src={"/images/beranda/gerigi-merah.png"}
//               alt=""
//               width={100}
//               height={100}
//               className="w-full"
//             />
//           </motion.div>
//         </div>
//       </div>
//       <Link
//         data-aos="fade-up"
//         href={"/materi/1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr"}
//         className="z-[1] rounded-[3.5vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] hover:from-[#FFA514] hover:to-[#FFD23F]"
//       >
//         <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text px-[7vw] py-[0.5] text-center font-story">
//           Lihat Modul
//         </p>
//       </Link>
//     </div>
//   );
// };

const KaryaAplikasiHP = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden"
      >
        {/* <h1 className="font-storybook text-[5vw]">
          <span className="text-[#013047] s">{CONTENT[0].subtitle2}</span>
        </h1> */}
        <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-light text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle2desc}
        </p>
      </div>
      <motion.div data-aos="fade-up" className="relative h-[41.2vw] w-[70vw]">
        <motion.div
          className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-[#013047] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden cursor-pointer"
          whileHover={{
            scale: 1.02,
            rotateZ: -1,
            boxShadow: "0 0.6vw 3vw rgba(255, 209, 99, 0.4)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="justify-center items-center flex w-full h-full"
          >
            <Image
              className="w-[45%] aspect-auto object-cover "
              alt=""
              src={"/nala1.svg"}
              width={1000}
              height={1000}
            />
          </motion.div>
        </motion.div>
        {/* <div className="absolute z-0 w-full translate-x-[30vw] scale-[0.35]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
          >
            <Image
              src={"/images/beranda/gerigi-merah.png"}
              alt=""
              width={100}
              height={100}
              className="w-full"
            />
          </motion.div>
        </div> */}
      </motion.div>
      <Link
        data-aos="fade-up"
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://drive.google.com/file/d/157RNpG_SA8OliPWnuBfHIPXGBr-c1OOb/view?usp=sharing"
        }
        className="z-[1] rounded-[3.5vw] bg-[#A01326] hover:bg-[#7f0818] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] cursor-pointer"
      >
        <p className="text-[#F9C157] px-[7vw] py-[0.5] text-center font-storybook">
          Baca Modul
        </p>
      </Link>
    </div>
  );
};

const TransitiAtas = () => {
  return (
    <div className="w-full h-[15vw] relative overflow-visible">
      {/* Container utama dengan overflow visible */}

      {/* Tugu Teknik - positioned behind kain kuning with low z-index */}
      <Image
        className="z-[1] translate-y-[-30vw] absolute bottom-[-17vw] left-0 w-[30vw] h-auto md:absolute md:bottom-[-17vw] md:left-0 md:w-[30vw] md:h-auto lg:absolute lg:bottom-[-17vw] lg:left-0 lg:w-[30vw] lg:h-auto"
        alt="Tugu Teknik"
        src="/images/assets_beranda_chapter2_tugtek.webp"
        width={960}
        height={250}
        draggable={false}
      />
      {/* Tugu Teknik - positioned behind kain kuning with low z-index */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="z-[10] translate-y-[-45vw] translate-x-[-3vw] absolute bottom-[-17vw] right-0 w-[12vw] h-auto md:absolute md:bottom-[-17vw] md:right-0 md:w-[12vw] md:h-auto lg:absolute lg:bottom-[-17vw] lg:right-0 lg:w-[12vw] lg:h-auto"
      >
        <Image
          alt="Bulu Kuning"
          src="/images/assets_beranda_chapter2_bulu3.svg"
          width={960}
          height={250}
          draggable={false}
        />
      </motion.div>

      {/* Kain Kuning - always on top with highest z-index */}
      <Image
        className="relative z-[1000] w-full h-auto object-cover translate-y-[-13vw]"
        alt="Background"
        src={"/images/assets_beranda_chapter3_kainkuningatas.webp"}
        width={1920}
        height={500}
        priority
        draggable={false}
      />

      {/* Gambar yang diletakkan di atas latar belakang */}
      <Image
        data-aos="fade-right"
        data-aos-delay="600"
        className="absolute left-0 top-0 w-[17.5vw] translate-x-[-1.8vw] translate-y-[7vw] z-[200]"
        alt="Abimanyu"
        src={"/images/assets_beranda_chapter3_abimanyu.svg"}
        width={100}
        height={100}
        draggable={false}
      />

      <Image
        data-aos="fade-left"
        data-aos-delay="600"
        className="absolute right-0 top-0 w-[20vw] translate-x-[-0.01vw] translate-y-[10vw] z-[200]"
        alt="Subadra"
        src={"/images/assets_beranda_chapter3_subadra.svg"}
        width={100}
        height={100}
        draggable={false}
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative z-[999] flex min-h-screen w-full flex-col place-content-center items-center gap-[5vw] px-[9.9vw] py-[0vw] pb-[5vw]">
      <JudulChapter />
      <JudulChapterHP />
      {/* <KesatriaMudaBerkarya /> */}
      {/* <KesatriaMudaBerkaryaTab /> */}
      {/* <KesatriaMudaBerkaryaHP /> */}
      <KaryaAplikatif />
      <KaryaAplikatifTab />
      <KaryaAplikasiHP />
    </div>
  );
};

export default function Chapter3() {
  return (
    <>
      <TransitiAtas />
      <Content />
    </>
  );
}
