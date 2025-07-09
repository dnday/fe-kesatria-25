import Image from "next/image";

const Background = () => {
  return (
    <div className="bg-[#013047] w-full mt-[5vw] z-0 md:mt-[1vw] lg:mt-[2vw] xl:mt-[2]">
      <Image
        className="w-[100vw] h-auto"
        alt="pattern"
        src="/images/selamatdatangvideo/pattern.webp"
        width={800}
        height={800}
      />
      <Image
        className="w-[100vw] h-auto mt-[3vw] py-3 xl:py-0"
        alt="pattern"
        src="/images/selamatdatangvideo/pattern.webp"
        width={800}
        height={800}
      />
      {/* <Image
        className="w-[100vw] h-auto mt-[3vw] hidden xl:block"
        alt="parang"
        src="/images/selamatdatangvideo/parang.webp"
        width={800}
        height={800}
      /> */}
      <Image
        className="w-[100vw] h-auto"
        alt="wayang"
        src="/images/selamatdatangvideo/4wayang.webp"
        width={800}
        height={800}
      />
    </div>
  );
};

const Video = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Image
        className="absolute left-[12vw] w-[25vw] h-auto"
        alt="sayap"
        src="/images/selamatdatangvideo/sayapkiri.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute right-[12vw] w-[25vw] h-auto"
        alt="sayap"
        src="/images/selamatdatangvideo/sayapkanan.webp"
        width={800}
        height={800}
      />
      <div className="relative h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:rounded-4xl md:p-2">
        <iframe
          className="w-full mx-auto aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/zvbdEJgUSb0?si=Nc5-cCmNifvP8s0U"
        />
      </div>
    </div>
  );
};

const SelamatDatangVideo = () => {
  return (
    <div className="relative">
      <Background />
      <div className="flex flex-col absolute justify-center items-center inset-0 text-[#F9C157] font-bold">
        <p className="text-[2vw]">SELAMAT DATANG</p>
        <p className="text-[4vw] font-storybook">KESATRIA MUDA 2025!</p>
        <Video />
        <Image
          className="absolute w-[100vw] h-[20vw] bottom-[-11vw] z-10"
          alt="wayang"
          src="/images/selamatdatangvideo/kainwayang1.webp"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
export default SelamatDatangVideo;
