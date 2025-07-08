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
            className="w-fit rounded-[1.5vw] bg-[#A01326] hover:bg-[#8a1020] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#FFA514] px-[2.5vw]"
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
      className="flex min-h-[90vh] flex-col place-content-center items-center bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] z-[-2] py-[20vw] max-lg:hidden"
      style={{ backgroundSize: "100%, 100%, 100%" }}
    >
      <h1 className="font-storybook text-[4vw] text-[#ECC691] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
        Bagian 2:
      </h1>
      <h1 className="font-storybook text-[4vw] text-[#ECC691] text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059]">
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
      <>
        <h1 className="text-[#ECC691] font-storybook text-[6vw]/[6vw]">
          Bagian 2:
        </h1>
        <h1 className="text-[#ECC691] font-storybook text-[6vw]/[6vw]">
          Lika-Liku Kesatria
        </h1>
      </>
    );
  };

  const Descrtiption = () => {
    return (
      <p className=" w-[70vw] text-justify font-primeform-medium text-[2.5vw]/[3.2vw] font-light text-[#ECC691]  drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
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
        <div className="relative flex h-[12vw] w-[18vw] items-center justify-center rounded-[2vw] bg-[#ECC691] overflow-hidden">
          <Image
            className="absolute h-full w-full rounded-[2vw]"
            alt=""
            src={imgpath}
            width={1000}
            height={1000}
          />
        </div>
      );
    };
    const Button = () => {
      return (
        <Link
          href={"/materi/" + link}
          className="w-fit rounded-[2.5vw] px-[5vw] bg-[#A01326] hover:bg-[#8a1020] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#FFA514]"
        >
          <p className="font-storybook text-[2vw] text-[#F9C157]">Baca Modul</p>
        </Link>
      );
    };
    return (
      <div className="flex w-full flex-col place-content-center items-center px-[3vw] py-[3vw]">
        <h1 className="font-storybook text-[4vw] text-[#A01326]">{title}</h1>
        <Gambar />
        <p className="px-[2vw] font-primeform-medium text-[2vw]/[2.5vw] text-center text-[#013047]">
          {desc}
        </p>
        <Button />
      </div>
    );
  };

  return (
    <div
      className="flex min-h-screen w-full flex-col place-content-center items-center py-[20vw] max-md:hidden lg:hidden bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%]"
      style={{ backgroundSize: "100% 100% 100%" }}
    >
      <div
        data-aos="fade-up"
        className="flex flex-col items-center pb-[5vw] gap-[1vw]"
      >
        <Title />
        <Descrtiption />
      </div>
      <div
        data-aos="fade-up"
        className="z-[1] flex h-[50vw] w-[70vw] items-center justify-center gap-[0vw] rounded-[2vw] bg-[#FFE5C7]"
      >
        <div
          className="flex h-full min-w-[3vw] items-center justify-center"
          onClick={() => {
            if (swiper?.activeIndex == 0) return;
            swiper?.slidePrev();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          {/* Arrow left placeholder */}
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
            if (swiper?.activeIndex == CARDCONTENT.length - 1) return;
            swiper?.slideNext();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          {/* Arrow right placeholder */}
        </div>
      </div>
      <div className="flex px-[0.5vw] gap-[0.5vw]">
        {CARDCONTENT.map((item, index) => (
          <div
            className={
              "z-[1] flex w-full cursor-pointer flex-col items-center rounded-b-[0.6vw] drop-shadow-[0_0.15vw_0.3vw_#000000] transition duration-100 " +
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
                "h-[0.12vw] w-[50%] translate-y-[-0.3vw] rounded-[0.15vw] " +
                (activeSwiper == index
                  ? "drop-shadow-[0_0_0.15vw_#000000]"
                  : "drop-shadow-none")
              }
            >
              <div
                className={
                  "h-full rounded-[0.15vw] " +
                  (activeSwiper == index ? "w-full" : "w-0")
                }
              />
            </div>
            <p
              className={
                "p-[0.20vw] text-center font-storybook text-[1.3vw] " +
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

const Chapter2_HP = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);

  const Title = () => {
    return (
      <>
        <h1 className="text-[#ECC691] font-storybook text-[6vw]/[6vw]">
          Bagian 2:
        </h1>
        <h1 className="text-[#ECC691] font-storybook text-[6vw]/[6vw]">
          Lika-Liku Kesatria
        </h1>
      </>
    );
  };

  const Descrtiption = () => {
    return (
      <p className="w-[85vw] text-center font-primeform-medium text-[3.5vw]/[4.5vw] font-light text-[#ECC691] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
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
        <div className="relative flex h-[25vw] w-[35vw] items-center justify-center rounded-[4vw] bg-[#ECC691] overflow-hidden">
          <Image
            className="absolute h-full w-full rounded-[4vw]"
            alt=""
            src={imgpath}
            width={1000}
            height={1000}
          />
        </div>
      );
    };

    const Button = () => {
      return (
        <Link
          href={"/materi/" + link}
          className="w-fit rounded-[4vw] px-[6vw] py-[1vw] bg-[#A01326] hover:bg-[#8a1020] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#FFA514]"
        >
          <p className="font-storybook text-[3.5vw] text-[#F9C157]">
            Baca Modul
          </p>
        </Link>
      );
    };

    return (
      <div className="flex w-full flex-col place-content-center items-center px-[5vw] py-[4vw]">
        <h1 className="font-storybook text-[5.5vw] text-[#A01326] pb-[3vw] text-center leading-tight">
          {title}
        </h1>
        <Gambar />
        <p className="px-[3vw] pt-[3vw] pb-[4vw] font-primeform-medium text-[2.8vw]/[3.5vw] text-center text-[#013047]">
          {desc}
        </p>
        <Button />
      </div>
    );
  };

  return (
    <div
      className="flex min-h-screen w-full flex-col place-content-center items-center py-[20vw] bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] md:hidden"
      style={{ backgroundSize: "100% 100% 100%" }}
    >
      <div
        data-aos="fade-up"
        className="flex flex-col items-center pb-[10vw] gap-[2vw]"
      >
        <Title />
        <Descrtiption />
      </div>
      <div
        data-aos="fade-up"
        className="z-[1] flex h-[120vw] w-[80vw] items-center justify-center gap-[0vw] rounded-[4vw] bg-[#FFE5C7]"
      >
        <div
          className={`flex h-full min-w-[8vw] items-center justify-center cursor-pointer ${
            activeSwiper === 0 ? "opacity-30" : "opacity-100"
          }`}
          onClick={() => {
            if (swiper?.activeIndex == 0) return;
            swiper?.slidePrev();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          <div className="text-[6vw] text-[#A01326]">‹</div>
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
          className={`flex h-full min-w-[8vw] items-center justify-center cursor-pointer ${
            activeSwiper === CARDCONTENT.length - 1
              ? "opacity-30"
              : "opacity-100"
          }`}
          onClick={() => {
            if (swiper?.activeIndex == CARDCONTENT.length - 1) return;
            swiper?.slideNext();
            setActiveSwiper(swiper?.activeIndex ?? 0);
          }}
        >
          <div className="text-[6vw] text-[#A01326]">›</div>
        </div>
      </div>
      {/* Indicators for the active swiper */}
      <div className="flex justify-center px-[0.5vw] gap-[1vw]">
        {(() => {
          // Calculate which 3 indicators to show
          let startIndex, endIndex;
          if (activeSwiper === 0) {
            startIndex = 0;
            endIndex = 3;
          } else if (activeSwiper === CARDCONTENT.length - 1) {
            startIndex = CARDCONTENT.length - 3;
            endIndex = CARDCONTENT.length;
          } else {
            startIndex = activeSwiper - 1;
            endIndex = activeSwiper + 2;
          }

          return CARDCONTENT.slice(startIndex, endIndex).map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div
                className={
                  "z-[1] flex w-[20vw] cursor-pointer flex-col items-center rounded-b-[1.2vw] drop-shadow-[0_0.3vw_0.6vw_#000000] transition duration-100 " +
                  (activeSwiper === actualIndex
                    ? "bg-[#A01326]"
                    : "bg-[#035A7A]")
                }
                key={actualIndex}
                onClick={() => {
                  setActiveSwiper(actualIndex);
                  swiper?.slideTo(actualIndex);
                }}
              >
                <div
                  className={
                    "h-[0.5vw] w-[50%] translate-y-[-1.2vw] rounded-[0.6vw] " +
                    (activeSwiper === actualIndex
                      ? "drop-shadow-[0_0_0.6vw_#000000]"
                      : "drop-shadow-none")
                  }
                >
                  <div
                    className={
                      "h-full rounded-[0.6vw] " +
                      (activeSwiper === actualIndex ? "w-full" : "w-0")
                    }
                  />
                </div>
                <p
                  className={
                    "p-[1vw] text-center font-storybook text-[2.4vw] " +
                    (activeSwiper !== actualIndex
                      ? "text-[#F9C157]"
                      : "text-[#ECC691]")
                  }
                >
                  {item.title}
                </p>
              </div>
            );
          });
        })()}
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
