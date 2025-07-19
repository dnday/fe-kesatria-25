import Link from "next/link";

const agendaAtribut = () => {
  return (
    <div className="relative flex flex-col items-center w-full text-[#013047]">
      <h2
        data-aos="fade-up"
        className="font-storybook text-[25px] md:text-[5vw]"
      >
        Agenda & Atribut
      </h2>
      <div className="flex flex-row gap-[5vw] mt-[3vw]">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-right"
          href={
            "https://pionir.ugm.ac.id/2025/aktivitas/kegiatan/hari-3-fakultas/teknik/"
          }
          className="bg-[#A01326] text-[#F9C157] font-storybook px-[10vw] xl:px-[5vw] py-[0.5vw] rounded-4xl text-[4vw] xl:text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer transition duration-300"
        >
          <p className="text-[#F9C157] items-center text-center font-storybook">
            Day 1
          </p>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
          href={
            "https://pionir.ugm.ac.id/2025/aktivitas/kegiatan/hari-4-fakultas/teknik/"
          }
          className="bg-[#A01326] text-[#F9C157] font-storybook px-[10vw] xl:px-[5vw] py-[0.5vw] rounded-4xl text-[4vw] xl:text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer transition duration-300"
        >
          <p className="text-[#F9C157] items-center text-center font-storybook">
            Day 2
          </p>
        </Link>
      </div>
      <div className="w-full h-[40vw] md:h-[30vw]"></div>
    </div>
  );
};
export default agendaAtribut;
