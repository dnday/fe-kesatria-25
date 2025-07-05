import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTENT = [
  {
    title: "Bagian III: Kesatria Muda Berkarya",
    titleTab: "Bagian III: Kesatria Muda Berkarya",
    titleHP: ["Bagian III:", "Kesatria Muda Berkarya"],
    titleDesc:
      "Tentunya kesatria muda sebagai calon-calon insinyur muda akan menghadapi masalah-masalah yang terjadi di Indonesia baik itu dari sektor manufaktur, infrastruktur, dan energi. Di bagian 3 ini, kesatria muda akan mengerjakan sebuah masalah keteknikan yang mana nantinya akan melatih kemampuan berpikir kritis, problem solving, dan kerja sama.",
    subtitle1: "Kesatria Muda Berkarya",
    subtitle1desc:
      "Para kesatria muda diharapkan mampu mengaplikasikan pengetahuan dan keterampilan yang relevan serta pemahaman mendalam mengenai  jurusan Teknik yang kesatria muda ambil untuk kontribusi mereka bagi bangsa dan negara di masa depan.",
    subtitle2: "Karya Aplikatif",
    subtitle2desc:
      "Indonesia sebagai negara berkembang terus menghadapi berbagai tantangan dalam sektor manufaktur, infrastruktur, dan energi. Di era globalisasi dan revolusi industri 4.0, kebutuhan akan tenaga ahli di bidang teknik semakin meningkat. Kesatria muda sebagai calon-calon insinyur muda berperan penting dalam pembangunan berkelanjutan dan peningkatan kualitas hidup masyarakat. Oleh karena itu, pendidikan teknik harus dapat membekali pengetahuan dan keterampilan yang relevan serta pemahaman mendalam tentang kontribusi mereka bagi bangsa.",
  },
];

const JudulChapter = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center max-lg:max-w-[65vw] max-sm:hidden relative"
    >
      <h1 className="font-storybook text-[4vw] text-[#013047] max-lg:text-[4.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
        Bagian 3:
      </h1>
      <h1 className="font-storybook text-[4vw] text-[#013047] max-lg:text-[4.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
        Kesatria Muda Berkarya
      </h1>
      <p className="text-center font-primeform-regular text-[2vw]/[2.5vw] text-[#013047] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)] max-lg:text-[2.5vw]/[3.2vw] font-medium max-w-[80%] mx-auto">
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
      <h1 className="font-storybook text-[6vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
        <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          {CONTENT[0].titleHP[0]}
        </span>
        <br />
        <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          {CONTENT[0].titleHP[1]}
        </span>
      </h1>
      <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
        {CONTENT[0].titleDesc}
      </p>
    </div>
  );
};

const KesatriaMudaBerkarya = () => {
  return (
    <div className="flex w-full items-center justify-between max-lg:hidden">
      <div
        data-aos="fade-right"
        className="flex max-w-[40vw] flex-col gap-[1vw]"
      >
        <h2 className="font-storybook text-[3vw] text-[#013047] max-lg:text-[3.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
          {CONTENT[0].subtitle1}
        </h2>
        <p className="text-justify font-primeform-medium text-[1.5vw]/[2vw] font-light text-[#013047] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          {CONTENT[0].subtitle1desc}
        </p>
        <Link
          href={"/materi/1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr"}
          className="w-[16.5vw] rounded-[2vw] bg-[#A01326] hover:bg-[#8a1020] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#FFA514]"
        >
          <p className="z-[10] text-[#F9C157] text-center font-storybook text-[2vw]">
            Baca Modul
          </p>
        </Link>
      </div>
      <div
        data-aos="fade-left"
        className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center"
      >
        <Image
          className="w-[90%] aspect-auto object-cover "
          alt=""
          src={"/nalatugtek.svg"}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

const KaryaAplikatif = () => {
  return (
    <div className="flex w-full items-center justify-between max-lg:hidden">
      <div
        data-aos="fade-right"
        className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-[#013047] drop-shadow-[0_0.1vw_1vw_#000000] flex items-center justify-center"
      >
        <Image
          className="w-[60%] aspect-auto object-cover "
          alt=""
          src={"/nala1.svg"}
          width={1000}
          height={1000}
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex max-w-[40vw] flex-col gap-[1vw] items-start"
      >
        <h2 className="font-storybook text-[3vw] text-[#013047] max-lg:text-[3.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
          {CONTENT[0].subtitle2}
        </h2>
        <p className="text-justify font-primeform-medium text-[1.5vw]/[2vw] font-light text-[#013047] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          {CONTENT[0].subtitle2desc}
        </p>
        <Link
          href={"/materi/1I1Gy5ds5m49J61qDT2hxvqygN1rWniWo"}
          className="w-[16.5vw] rounded-[2vw] bg-[#A01326] hover:bg-[#8a1020] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#FFA514]"
        >
          <p className="z-[10] text-[#F9C157] text-center font-storybook text-[2vw]">
            Baca Modul
          </p>
        </Link>
      </div>
    </div>
  );
};

const KesatriaMudaBerkaryaTab = () => {
  return (
    <div className="flex w-[71vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center gap-[1vw]"
      >
        <h2 className="custom-shadow-text bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-storybook text-[5vw] text-transparent">
          {CONTENT[0].subtitle1}
        </h2>
        <p className="max-w-[65vw] text-justify font-primeform-medium text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle1desc}
        </p>
        <div className="mt-[2vw] flex w-full flex-col items-center justify-center gap-[2vw] lg:hidden">
          <Image
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
          />
          <div className="z-[1] h-[23.2vw] w-[39.7vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] flex items-center justify-center">
            {/* Tablet */}
            <Image
              className="w-[40%] aspect-auto object-cover "
              alt=""
              src={"/nalatugtek.svg"}
              width={1000}
              height={1000}
            />
          </div>
          <Link
            href={"/materi/1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr"}
            className="z-[1] w-[26.9vw] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-center font-storybook text-[3vw] text-transparent">
              Lihat Modul
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const KaryaAplikatifTab = () => {
  return (
    <div className="flex w-[71vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center gap-[1vw]"
      >
        <h2 className="custom-shadow-text bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-storybook text-[5vw] text-transparent">
          {CONTENT[0].subtitle2}
        </h2>
        <p className="max-w-[65vw] text-justify font-primeform-medium text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle2desc}
        </p>
        <div className="mt-[2vw] flex w-full flex-col items-center justify-center gap-[2vw] lg:hidden">
          <Image
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
          />
          <div className="z-[1] h-[23.2vw] w-[39.7vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] flex items-center justify-center">
            {/* Tablet */}
            <Image
              className="w-[50%] aspect-auto object-cover "
              alt=""
              src={"/nala2.png"}
              width={1000}
              height={1000}
            />
          </div>
          <Link
            href={"/materi/1I1Gy5ds5m49J61qDT2hxvqygN1rWniWo"}
            className="z-[1] w-[26.9vw] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-center font-storybook text-[3vw] text-transparent">
              Lihat Modul
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const KesatriaMudaBerkaryaHP = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden"
      >
        <h1 className="font-storybook text-[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
          <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
            {CONTENT[0].subtitle1}
          </span>
        </h1>
        <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle1desc}
        </p>
      </div>
      <div data-aos="fade-up" className="relative h-[41.2vw] w-[70vw]">
        <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)] flex items-center justify-center">
          <Image
            className="w-[40%] aspect-auto object-cover "
            alt=""
            src={"/nalatugtek.svg"}
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute z-0 w-full translate-x-[-30vw] scale-[0.35]">
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
        </div>
      </div>
      <Link
        data-aos="fade-up"
        href={"/materi/1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr"}
        className="z-[1] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]"
      >
        <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text px-[7vw] py-[0.5] text-center font-storybook text-[4vw] text-transparent">
          Lihat Modul
        </p>
      </Link>
    </div>
  );
};

const KaryaAplikasiHP = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
      <div
        data-aos="fade-up"
        className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden"
      >
        <h1 className="font-storybook text-[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
          <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
            {CONTENT[0].subtitle2}
          </span>
        </h1>
        <p className="max-w-[72vw] text-justify font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle2desc}
        </p>
      </div>
      <div data-aos="fade-up" className="relative h-[41.2vw] w-[70vw]">
        <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)] flex items-center justify-center">
          <Image
            className="w-[50%] aspect-auto object-cover "
            alt=""
            src={"/nala2.png"}
            width={1000}
            height={1000}
          />
        </div>
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
      </div>
      <Link
        data-aos="fade-up"
        href={"/materi/1I1Gy5ds5m49J61qDT2hxvqygN1rWniWo"}
        className="z-[1] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]"
      >
        <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text px-[7vw] py-[0.5] text-center font-storybook text-[4vw] text-transparent">
          Lihat Modul
        </p>
      </Link>
    </div>
  );
};

const TransitiAtas = () => {
  return (
    <div className="w-full h-[30vw] relative overflow-visible">
      {/* Container utama dengan overflow visible */}
      <div className="absolute inset-0 w-full overflow-visible">
        {/* Latar belakang yang besar */}
        <Image
          className="w-full h-auto object-cover"
          alt="Background"
          src={"/images/assets_beranda_chapter3_kainkuningatas.svg"}
          width={1920}
          height={500}
          priority
        />

        {/* Gambar yang diletakkan di atas latar belakang */}
        <Image
          className="absolute left-0 top-0 w-[17.5vw] translate-x-[-1.8vw] translate-y-[28vw] z-[200]"
          alt="Abimanyu"
          src={"/images/assets_beranda_chapter3_abimanyu.svg"}
          width={100}
          height={100}
        />

        <Image
          className="absolute right-0 top-0 w-[20vw] translate-x-[-0.01vw] translate-y-[30vw] z-[200]"
          alt="Subadra"
          src={"/images/assets_beranda_chapter3_subadra.svg"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="z-[10] flex min-h-screen w-full flex-col place-content-center items-center gap-[5vw] px-[9.9vw] py-[0vw] pb-[10vw]">
      <JudulChapter />
      <JudulChapterHP />
      <KesatriaMudaBerkarya />
      <KesatriaMudaBerkaryaTab />
      <KesatriaMudaBerkaryaHP />
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
