import Link from "next/link";
import Image from "next/image";

const Tombol = ({ label = "", href = "#", dataAos = "" }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      data-aos={dataAos}
      className="bg-[#A01326] text-[#F9C157] font-storybook px-[10vw] xl:px-[5vw] py-[1vw] rounded-4xl text-[2.5vw] xl:text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer transition duration-300"
    >
      <p className="text-[#F9C157] items-center text-center font-storybook">
        {label}
      </p>
    </Link>
  );
};

const agendaAtribut = () => {
  return (
    <div className="relative flex flex-col items-center w-full text-[#013047]">
      <div className="flex flex-row">
        <Image
          priority
          className="w-[30vw] h-auto"
          alt="nala"
          src="/images/selamatdatang/nala-menyapa2.webp"
          width={405}
          height={540}
        />
        <div className="flex flex-col items-center justify-center">
          <h2
            data-aos="fade-up"
            className="font-storybook text-[25px] md:text-[5vw]"
          >
            Agenda & Atribut
          </h2>
          <div className="flex flex-row gap-[5vw] mt-[3vw]">
            <Tombol
              label="Day 1"
              href="https://pionir.ugm.ac.id/2025/aktivitas/kegiatan/hari-3-fakultas/teknik/"
              dataAos="fade-right"
            />
            <Tombol
              label="Day 2"
              href="https://pionir.ugm.ac.id/2025/aktivitas/kegiatan/hari-4-fakultas/teknik/"
              dataAos="fade-left"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[33vw] md:h-[25vw]"></div>
    </div>
  );
};
export default agendaAtribut;
