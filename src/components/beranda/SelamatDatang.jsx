import Image from "next/image";

const SelamatDatang = () => {
  return (
    <div className="relative w-full flex justify-center">
      <Image
        className="absolute w-[20vw] h-auto z-0 right-[0] top-[7vw] sm:top-[0] md:top-[2vw] lg:top-[0]"
        alt="pojok atas"
        src="/images/selamatdatang/pojokatas.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute w-[30vw] h-auto z-0 left-0 top-[6vw] sm:top-[1vw] md:top-[2vw] lg:top-[0]"
        alt="kain merah kiri"
        src="/images/selamatdatang/KainMerahKiri.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute w-[30vw] top-[45vw] h-auto z-10 right-[0] md:top-[20vw] lg:top-[16vw]"
        alt="tutek"
        src="/images/selamatdatang/tutek.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute w-[35vw] top-[45vw] h-auto z-10 right-[0] md:top-[16vw] lg:top-[15vw] lg:right-0"
        alt="kain merah kanan"
        src="/images/selamatdatang/KainMerahKanan.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute w-[54vw] h-[34vw] top-[77vw] left-0 z-10 md:top-[48vw] lg:top-[44vw]"
        alt="kainmerah2"
        src="/images/selamatdatang/kainmerah2.webp"
        width={800}
        height={800}
      />
      <Image
        className="absolute w-[100vw] top-[63vw] h-auto z-10 md:top-[34vw] lg:top-[30vw]"
        alt="kain kuning"
        src="/images/selamatdatang/kainnkuning.webp"
        width={800}
        height={400}
      />
      <Image
        className="absolute w-[35vw] top-[58vw] h-auto z-20 left-0 md:top-[35vw] lg:top-[30vw]"
        alt="pojokbawah"
        src="/images/selamatdatang/pojokbawah.webp"
        width={800}
        height={800}
      />

      <div className="relative flex flex-row justify-center gap-0 md:gap-[8vw]">
        <Image
          className="w-[45vw] h-[55vw] mt-[20vw] z-30 md:w-[30vw] md:h-[40vw] md:mt-[10vw] lg:mt-[5vw]"
          alt="nala"
          src="/images/selamatdatang/nala-menyapa2.webp"
          width={800}
          height={1200}
        />
        <div className="text-center text-[4vw] text-[#0C1A35] mt-[32vw] left-[10vw] z-30 md:mt-[20vw] lg:mt-[16vw] md:text-[3vw] ">
          <p className="font-primeform-bold">SELAMAT DATANG</p>
          <p className="text-[7vw] font-storybook md:text-[5vw]">
            Kesatria Muda
          </p>
          <p className="font-primeform-bold">2025!</p>
        </div>
      </div>
    </div>
  );
};
export default SelamatDatang;
