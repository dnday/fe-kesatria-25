import Image from "next/image";
import Kolase2 from "../../modular/kolase2.jsx";
import Link from "next/link.js";
const Desktop = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen gap-[3vw] text-[#013047]">
      <div className="flex flex-row gap-[15vw] mt-[6vw] items-center">
        {/* nala */}
        <div
          data-aos="fade-right"
          className="w-[30vw] flex flex-row items-center"
        >
          <Image
            className="w-[30vw] h-auto"
            alt="nala"
            src="/images/selamatdatang/nala-menyapa2.webp"
            width={405}
            height={540}
          />
          <div className="flex flex-col">
            <p className="text-[2.5vw] font-bold font-storybook">
              {" "}
              Day 1 Pionir Kesatria 2025
            </p>
            <Link
              href={"/dokumentasi/day1"}
              className="bg-[#013047] text-[#F9C157] font-primeform px-[2vw] py-[0.5vw] rounded-4xl text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-400 cursor-pointer text-center"
            >
              Lihat
            </Link>
          </div>
        </div>

        {/* Kolase2 atas */}
        <div data-aos="fade-left" className="flex flex-row gap-3">
          {/* col 1 */}
          <div className="flex flex-col gap-3">
            <Kolase2 src="/images/chapter1/sample.jpg" height="15vw" />
            <Kolase2 src="/images/chapter1/sample.jpg" height="15vw" />
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-3">
            <Kolase2
              src="/images/chapter1/sample.jpg"
              width="30vw"
              height="14.5vw"
            />
            <div className="flex flex-row gap-3">
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* day2 */}
      <div className="flex flex-row gap-[15vw] items-center">
        {/* nala */}
        <div
          data-aos="fade-right"
          className="w-[30vw] flex flex-row items-center"
        >
          <Image
            className="w-[30vw] h-auto"
            alt="nala"
            src="/images/selamatdatang/nala-menyapa2.webp"
            width={405}
            height={540}
          />
          <div className="flex flex-col">
            <p className="text-[2.5vw] font-bold font-storybook">
              {" "}
              Day 2 Pionir Kesatria 2025
            </p>
            <Link
              href={"/dokumentasi/day1"}
              className="bg-[#013047] text-[#F9C157] font-primeform px-[2vw] py-[0.5vw] rounded-4xl text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-400 cursor-pointer text-center"
            >
              Lihat
            </Link>
          </div>
        </div>

        {/* Kolase2 atas */}
        <div data-aos="fade-left" className="flex flex-row gap-3">
          {/* col 1 */}
          <div className="flex flex-col gap-3">
            <Kolase2 src="/images/chapter1/sample.jpg" height="15vw" />
            <Kolase2 src="/images/chapter1/sample.jpg" height="15vw" />
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-3">
            <Kolase2
              src="/images/chapter1/sample.jpg"
              width="30vw"
              height="14.5vw"
            />
            <div className="flex flex-row gap-3">
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[25vw]"></div>
    </div>
  );
};
export default Desktop;
