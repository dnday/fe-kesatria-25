import Image from "next/image";
import { useState } from "react";

const Background = () => {
  return (
    <div className="bg-[#013047] w-full mt-[5vw] z-0 md:mt-[1vw] lg:mt-[2vw] xl:mt-[2]">
      <Image
        className="w-[100vw] h-auto"
        alt="pattern"
        src="/images/selamatdatangvideo/pattern.webp"
        width={412}
        height={97}
        loading="lazy"
      />
      <Image
        className="w-[100vw] h-auto mt-[3vw] py-3 xl:py-0"
        alt="pattern"
        src="/images/selamatdatangvideo/pattern.webp"
        width={412}
        height={97}
        loading="lazy"
      />
      <Image
        priority
        className="w-[100vw] h-auto"
        alt="wayang"
        src="/images/selamatdatangvideo/4wayang.webp"
        width={412}
        height={56}
      />
    </div>
  );
};

const SelamatDatangVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = "zuJbK71Zjfo";

  const loadVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative">
      <Background />
      <div className="flex flex-col absolute justify-center items-center inset-0 text-[#F9C157] font-bold">
        <div data-aos="fade-up" className="text-center">
          <p className="text-[2vw]">SELAMAT DATANG</p>
          <p className="text-[4vw] font-storybook">KESATRIA MUDA 2025!</p>
        </div>

        {/* Video dan Sayap */}
        <div className="relative w-full flex items-center justify-center mt-[3vw]">
          {/* Sayap kiri */}
          <div
            data-aos="fade-left"
            className="absolute left-[12vw] w-[25vw] h-auto"
          >
            <Image
              className="w-full h-auto"
              alt="sayap kiri"
              src="/images/selamatdatangvideo/sayapkiri.webp"
              width={338}
              height={377}
              loading="lazy"
              sizes="25vw"
            />
          </div>

          {/* Sayap kanan */}
          <div
            data-aos="fade-right"
            className="absolute right-[12vw] w-[25vw] h-auto"
          >
            <Image
              className="w-full h-auto"
              alt="sayap kanan"
              src="/images/selamatdatangvideo/sayapkanan.webp"
              width={338}
              height={386}
              loading="lazy"
              sizes="25vw"
            />
          </div>

          {/* Frame Video */}
          <div
            data-aos="zoom-in"
            className="relative h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:rounded-4xl md:p-2"
          >
            {!isVideoLoaded ? (
              <div
                className="relative w-full aspect-video rounded-2xl cursor-pointer overflow-hidden group"
                onClick={loadVideo}
              >
                <Image
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Video thumbnail - Selamat Datang Kesatria Muda 2025"
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  fill
                  sizes="45vw"
                  priority
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors shadow-lg transform group-hover:scale-110">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Loading indicator when clicked */}
                <div className="absolute top-2 right-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                  Klik untuk play
                </div>
              </div>
            ) : (
              <iframe
                className="w-full mx-auto aspect-video rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&start=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Selamat Datang Kesatria Muda 2025"
              />
            )}
          </div>
        </div>

        <Image
          className="absolute w-[100vw] h-[20vw] bottom-[-11vw] z-10"
          alt="wayang"
          src="/images/selamatdatangvideo/kainwayang1.webp"
          width={412}
          height={82}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default SelamatDatangVideo;
