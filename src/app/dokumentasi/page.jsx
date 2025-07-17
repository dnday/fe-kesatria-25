import Link from "next/link";

const dokumentasi = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen xl:flex-row text-white font-bold text-[5vw] gap-[5vw] font-storybook">
      <div
        data-aos="fade-right"
        className="flex flex-col items-center mb-[10vw]"
      >
        <Link href="/dokumentasi/day1">
          <div className="bg-[#013047] w-[40vw] h-[30vw] md:w-[30vw] md:h-[20vw] xl:w-[20vw] xl:h-[15vw] rounded-2xl text-center justify-center items-center flex hover:cursor-pointer hover:bg-[#014a6b] transition-all duration-300">
            Day 1
          </div>
        </Link>
      </div>

      <div
        data-aos="fade-left"
        className="flex flex-col items-center mb-[10vw]"
      >
        <Link href="/dokumentasi/day2">
          <div className="bg-[#013047] w-[40vw] h-[30vw] md:w-[30vw] md:h-[20vw] xl:w-[20vw] xl:h-[15vw] rounded-2xl text-center justify-center items-center flex hover:cursor-pointer hover:bg-[#014a6b] transition-all duration-300">
            Day 2
          </div>
        </Link>
      </div>
    </div>
  );
};
export default dokumentasi;
