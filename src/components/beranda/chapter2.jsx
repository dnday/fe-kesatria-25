"use client";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CARDCONTENT = [
  {
    title: "Lika-Liku Kesatria",
    desc: "Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.",
    link: "/1w6AQyjaFXOSQpm_ZQe3RHZkU_80uNUHb",
    imgpath: "/images/chapter 2/lika-liku.jpg",
  },
  {
    title: "Pengenalan Jurusan",
    desc: "Fakultas Teknik terdiri dari 8 Departemen yang di dalamnya terdapat 15 Program Studi atau yang biasa dikenal dengan jurusan. Sebelum masuk ke jurusan masing-masing, yuk kita sama-sama kenali jurusan Kesatria Muda melalui modul berikut!",
    link: "/prodi",
    imgpath: "/images/chapter 2/pengenalan.jpg",
  },
  {
    title: "Jelajah Lembaga",
    desc: "Fakultas Teknik tidak hanya bergerak dan berprestasi di bidang akademik saja, namun terdapat berbagai macam lembaga yang dapat menunjang skill mahasiswanya. Wah, lembaga mana nih yang diminati Kesatria Muda? Mari pahami modul berikut sebagai bekal bagi Kesatria Muda!",
    link: "/1pJurt6XIllXkBgFsEF9nl2AI0S_IS0Pq",
    imgpath: "/images/chapter 2/jelajah.jpg",
  },
  {
    title: "Pameran Karya",
    desc: "Fakultas Teknik tidak terlepas dari segudang prestasinya. Penasaran siapa saja tim-tim yang bergerak di belakang untuk mengharumkan nama Fakultas Teknik? Yuk, simak modul berikut ini!",
    link: "/1CZpujWAl0SC1GWpOGn-k_acMeL2W0X1U",
    imgpath: "/images/chapter 2/pameran.jpg",
  },
  {
    title: "Fasilitas Teknik",
    desc: "Fakultas Teknik sebagai fakultas terbesar di Universitas Gadjah Mada memiliki beragam fasilitas yang menunjang kegiatan mahasiswanya. Mau tahu apa saja fasilitas yang ada di Fakultas Teknik? Mari simak modul berikut!",
    link: "/1eFLENcwhriBPk6uqChqVCeZtCfWK-wOW",
    imgpath: "/images/chapter 2/teknik.jpg",
  },
];

const Chapter2_Desktop = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);
  const SwiperCard = ({ title, desc, imgpath, link }) => {
    return (
      <div className="flex items-center justify-center gap-[2.5vw]">
        <div
          className="relative h-[13.5vw] w-[20vw] rounded-[2vw] bg-[#A01326] overflow-hidden justify-center items-center flex"
          data-aos="fade-left"
        >
          <Image
            className="absolute h-full w-full rounded-[2vw]"
            alt=""
            src={imgpath}
            width={1000}
            height={1000}
          ></Image>
          {/* <div className="absolute h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] opacity-50">
            opacity
          </div> */}
          {/* <div className="absolute -right-[7vw] -top-[8vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-1.png"
              alt=""
              width={100}
              height={100}
              className="w-full scale-[0.5]"
            />
          </div>
          <div className="absolute -bottom-[5.9vw] -left-[7.9vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-2.png"
              alt=""
              width={100}
              height={100}
              className="w-full scale-[0.5]"
            />
          </div> */}
        </div>
        <div className="flex h-[22vw] flex-col place-content-center gap-[0.5vw]">
          <h2 className="font-storybook text-[3vw] text-[#013047] text-center">
            {title}
          </h2>
          <p className="w-[36vw] text-justify font-primeform-medium text-[#013047] text-[1.2vw]">
            {desc}
          </p>
          <Link
            href={"/materi/" + link}
            className="w-fit rounded-[1.5vw]  bg-[#A01326] hover:bg-[#8a1020] px-[2.5vw] duration-100"
          >
            <p className="font-storybook text-[1.5vw] text-[#F9C157]">
              Baca Modul
            </p>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div
      data-aos="fade-up"
      className="flex min-h-[90vh] flex-col place-content-center items-center bg-[url('/images/background/pattern-parang-dark.png')] bg-size-[60%_60%_60%] bg-[#013047] z-[-2] py-[5vw] max-lg:hidden"
    >
      <h1 className="font-storybook text-[4vw] text-[#ECC691] max-lg:text-[4.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
        Bagian 2:
      </h1>
      <h1 className="font-storybook text-[4vw] text-[#ECC691] max-lg:text-[4.8vw] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
        Lika-Liku Kesatria
      </h1>
      <p className="w-[80vw] pb-[2vw] px-[6vw] text-center font-primeform-medium text-[1.5vw]/[2vw] font-light text-[#ECC691] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat
        sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki
        jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di
        masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan
        kesibukan akademik dan di luar akademik yang cukup kompleks semasa
        kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk
        menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan
        yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik
        pada modul ini.
      </p>
      <div className="z-[1] flex h-[25vw] w-[75vw] items-center justify-center gap-[0vw] rounded-[2vw] bg-[#FFE5C7]">
        <div
          className="flex h-full min-w-[3vw] items-center justify-center"
          onClick={() => {
            if (swiper?.activeIndex == 0) return;
            swiper?.slidePrev();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          {/* <Image
            className="absolute h-[8vw] w-[3vw] cursor-pointer duration-100 hover:w-[5vw] hover:translate-x-[-1vw]"
            alt=""
            src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
            width={52.7}
            height={95.23}
          /> */}
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveSwiper(swiper.activeIndex);
          }}
        >
          {CARDCONTENT.map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                imgpath={item.imgpath}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="flex h-full min-w-[3vw] items-center justify-center"
          onClick={() => {
            if (swiper?.activeIndex == CARDCONTENT.length) return;
            swiper?.slideNext();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          {/* <Image
            className="absolute h-[8vw] w-[3vw] cursor-pointer duration-100 hover:w-[5vw] hover:translate-x-[1vw]"
            alt=""
            src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
            width={52.7}
            height={95.23}
          /> */}
        </div>
      </div>
      <div className="flex px-[2vw] gap-[1vw]">
        {CARDCONTENT.map((item, index) => (
          <div
            className={
              "z-[1] flex w-full cursor-pointer flex-col items-center rounded-b-[1.2vw] drop-shadow-[0_0.3vw_0.6vw_#000000] transition duration-100 " +
              (activeSwiper == index ? "bg-[#A01326]" : "bg-[#035A7A]")
            }
            key={index}
            onClick={() => {
              setActiveSwiper(index);
              swiper?.slideTo(index);
            }}
          >
            <div
              className={
                "h-[0.25vw] w-[50%] translate-y-[-0.6vw] rounded-[0.3vw] " +
                (activeSwiper == index
                  ? "drop-shadow-[0_0_0.3vw_#000000]"
                  : "drop-shadow-none")
              }
            >
              <div
                className={
                  "h-full rounded-[0.3vw] " +
                  (activeSwiper == index ? "w-full" : "w-0")
                }
              />
            </div>
            <p
              className={
                "p-[0.5vw] text-center font-storybook text-[1.2vw] " +
                (activeSwiper != index ? "text-[#F9C157]" : "text-[#ECC691]")
              }
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Chapter2_Tablet = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);

  const Title = () => {
    return (
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-storybook text-[6vw]/[6vw] text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
        Bagian II: Lika-Liku Kesatria
      </h1>
    );
  };

  const Descrtiption = () => {
    return (
      <p className="custom-shadow-text w-[70vw] text-justify font-primeform-medium text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat
        sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki
        jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di
        masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan
        kesibukan akademik dan di luar akademik yang cukup kompleks semasa
        kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk
        menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan
        yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik
        pada modul ini.
      </p>
    );
  };
  const SwiperCard = ({ title, desc, imgpath, link }) => {
    const Gambar = () => {
      return (
        <div className="relative flex h-[13.5vw] w-[20vw] items-center justify-center rounded-[2vw] bg-[##ECC691] ">
          <div className="absolute h-full w-full overflow-hidden rounded-[2vw]">
            <Image
              className="h-full"
              alt=""
              src={imgpath}
              width={1000}
              height={1000}
            />
          </div>
          {/* <div className="absolute h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] opacity-50">
            
          </div> */}
          {/* <div className="absolute -right-[7vw] -top-[8vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-1.png"
              alt=""
              width={100}
              height={100}
              className="custom-shadow-box w-full scale-[0.5]"
            />
          </div>
          <div className="absolute -bottom-[5.9vw] -left-[7.9vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-2.png"
              alt=""
              width={100}
              height={100}
              className="custom-shadow-box w-full scale-[0.5]"
            />
          </div> */}
        </div>
      );
    };
    const Button = () => {
      return (
        <Link
          href={"/materi/" + link}
          className="w-fit rounded-[4.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[5vw] duration-100 hover:from-[#FFA514] hover:to-[#FFD23F]"
        >
          <p className="font-storybook text-[3vw] text-[#5E1675]">
            Lihat Modul
          </p>
        </Link>
      );
    };
    return (
      <div className="flex w-full flex-col place-content-center items-center py-[4vw]">
        <Image
          className="absolute right-0 z-[0] w-[48vw] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kanan.svg"}
          width={528}
          height={549}
        />
        <Image
          className="absolute left-0 z-[0] w-[48vw] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kiri.svg"}
          width={528}
          height={549}
        />
        <div className="z-[1] flex h-[55vw] w-[65vw] flex-col place-content-center items-center gap-[2vw] rounded-[2vw] bg-[#FFE5C7] drop-shadow-[0_0.5vw_1vw_#000000]">
          <h1 className="bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text font-storybook text-[5vw] text-transparent">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-[6vw]">
            <button
              className="flex w-[8vw] justify-end"
              onClick={() => {
                if (swiper?.activeIndex == CARDCONTENT.length) return;
                swiper?.slidePrev();
                setActiveSwiper(swiper?.activeIndex ?? 0);
              }}
            >
              {/* <Image
                className="z-[1] w-[4vw] duration-100 hover:w-[6vw]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
                width={52.7}
                height={95.23}
              /> */}
            </button>
            <Gambar />
            <button
              className="flex w-[8vw] justify-start"
              onClick={() => {
                if (swiper?.activeIndex == CARDCONTENT.length) return;
                swiper?.slideNext();
                setActiveSwiper(swiper?.activeIndex ?? 0);
              }}
            >
              {/* <Image
                className="z-[1] w-[4vw] duration-100 hover:w-[6vw]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
                width={52.7}
                height={95.23}
              /> */}
            </button>
          </div>
          <p className="px-[5vw] font-primeform-medium text-[2vw]">{desc}</p>
          <Button />
        </div>
        <div className="z-[0] flex">
          <div className="h-[6vw] w-[15vw] rounded-b-[3vw] bg-gradient-to-br from-[#491772] to-[#5E1675] drop-shadow-[0_1vw_1vw_#000000]" />
          <div className="z-[1] flex h-[6vw] w-[25vw] items-center justify-center rounded-b-[3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_1vw_1vw_#000000]">
            <button className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text text-center font-storybook text-[3vw] text-transparent">
              {title}
            </button>
          </div>
          <div className="z-[0] h-[6vw] w-[15vw] rounded-b-[3vw] bg-gradient-to-b from-[#491772] to-[#5E1675] drop-shadow-[0_1vw_1vw_#000000]" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col place-content-center items-center gap-[3vw] py-[10vw] max-md:hidden lg:hidden">
      <div data-aos="fade-up" className="flex flex-col items-center">
        <Title />
        <Descrtiption />
      </div>
      <div data-aos="fade-up" className="w-screen">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveSwiper(swiper.activeIndex);
          }}
          loop={true}
        >
          {CARDCONTENT.map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                imgpath={item.imgpath}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Chapter2_HP = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);

  const Title = () => {
    return (
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-storybook text-[6vw]/[6vw] text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
        Bagian II: Lika-Liku Kesatria
      </h1>
    );
  };

  const Descrtiption = () => {
    return (
      <p className="w-[70vw] pt-[3vw] text-justify font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat
        sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki
        jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di
        masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan
        kesibukan akademik dan di luar akademik yang cukup kompleks semasa
        kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk
        menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan
        yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik
        pada modul ini.
      </p>
    );
  };
  const SwiperCard = ({ title, desc, imgpath, link }) => {
    const Gambar = () => {
      return (
        <div className="relative flex h-[13.5vw] w-[20vw] items-center justify-center rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-cover">
          <div className="absolute h-full w-full overflow-hidden rounded-[2vw]">
            <Image
              className="h-full"
              alt=""
              src={imgpath}
              width={1000}
              height={1000}
            />
          </div>
          {/* <div className="absolute h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] opacity-50">
            opacity
          </div> */}
          <div className="absolute -right-[7vw] -top-[8vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-1.png"
              alt=""
              width={100}
              height={100}
              className="w-full scale-[0.5]"
            />
          </div>
          <div className="absolute -bottom-[5.95vw] -left-[7.9vw] w-full">
            <Image
              src="/images/beranda/pita-box-ungu-2.png"
              alt=""
              width={100}
              height={100}
              className="w-full scale-[0.5]"
            />
          </div>
        </div>
      );
    };

    const Button = () => {
      return (
        <Link
          href={"/materi" + link}
          className="w-fit rounded-[4.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[5vw] duration-100 hover:from-[#FFA514] hover:to-[#FFD23F]"
        >
          <p className="font-storybook text-[3vw] text-[#5E1675]">
            Lihat Modul
          </p>
        </Link>
      );
    };

    return (
      <div className="flex w-full flex-col place-content-center items-center py-[4vw]">
        <Image
          className="absolute right-0 z-[0] w-[48vw] translate-y-[8vw] scale-y-[1.5]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kanan.svg"}
          width={528}
          height={549}
        />
        <Image
          className="absolute left-0 z-[0] w-[48vw] translate-y-[8vw] scale-y-[1.5]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kiri.svg"}
          width={528}
          height={549}
        />
        <div className="z-[1] flex h-[88vw] w-[60vw] flex-col place-content-center items-center justify-between gap-[2.5vw] rounded-[2vw] bg-[#FFE5C7] py-[4vw] drop-shadow-[0_0.5vw_1vw_#000000]">
          <h1 className="bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text font-storybook text-[5vw] text-transparent">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-[6vw]">
            <button
              className="flex w-[8vw] justify-end"
              onClick={() => {
                if (swiper?.activeIndex == CARDCONTENT.length) return;
                swiper?.slidePrev();
                setActiveSwiper(swiper?.activeIndex ?? 0);
              }}
            >
              {/* <Image
                className="z-[1] w-[4vw] duration-100 hover:w-[6vw]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
                width={52.7}
                height={95.23}
              /> */}
            </button>
            <Gambar />
            <button
              className="flex w-[8vw] justify-start"
              onClick={() => {
                if (swiper?.activeIndex == CARDCONTENT.length) return;
                swiper?.slideNext();
                setActiveSwiper(swiper?.activeIndex ?? 0);
              }}
            >
              {/* <Image
                className="z-[1] w-[4vw] duration-100 hover:w-[6vw]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
                width={52.7}
                height={95.23}
              /> */}
            </button>
          </div>
          <p className="px-[8vw] text-justify font-primeform-medium text-[2.5vw]">
            {desc}
          </p>
          <Button />
        </div>
        <div className="z-[0] flex">
          <div className="h-[6vw] w-[15vw] rounded-b-[3vw] bg-gradient-to-br from-[#491772] to-[#5E1675] drop-shadow-[0_1vw_1vw_#000000]" />
          <div className="z-[1] flex h-[6vw] w-[25vw] items-center justify-center rounded-b-[3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_1vw_1vw_#000000]">
            <button className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text text-center font-storybook text-[3vw] text-transparent">
              {title}
            </button>
          </div>
          <div className="z-[0] h-[6vw] w-[15vw] rounded-b-[3vw] bg-gradient-to-b from-[#491772] to-[#5E1675] drop-shadow-[0_1vw_1vw_#000000]" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen w-full flex-col place-content-center items-center gap-[3vw] py-[10vw] pt-[5vw] md:hidden">
      <div data-aos="fade-up" className="flex flex-col items-center">
        <Title />
        <Descrtiption />
      </div>
      <div data-aos="fade-up" className="w-screen">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveSwiper(swiper.activeIndex);
          }}
          loop={true}
        >
          {CARDCONTENT.map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                imgpath={item.imgpath}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default function Chapter2() {
  return (
    <>
      <Chapter2_Desktop />
      <Chapter2_Tablet />
      <Chapter2_HP />
    </>
  );
}
