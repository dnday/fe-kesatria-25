import Image from "next/image";
import Kolase2 from "../../modular/kolase2.jsx";
import Link from "next/link.js";
const Mobile = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen gap-[3vw] text-[#013047]">
      <div
        data-aos="fade-left"
        className="flex flex-col mt-[20vw] items-center"
      >
        {/* nala */}
        <div className="w-full flex flex-row items-center justify-center">
          <Image
            className="w-[30vw] h-auto"
            alt="nala"
            src="/images/selamatdatang/nala-menyapa2.webp"
            width={800}
            height={800}
          />
          <div className="flex flex-col text-[30px] font-bold font-storybook">
            <p> Day 1</p>
            <p>Pionir Kesatria 2025</p>
          </div>
        </div>

        {/* Kolase2 atas */}
        <div data-aos="fade-left" className="flex flex-col gap-2">
          <div className="flex flex-row gap-3">
            {/* col 1 */}
            <div className="flex flex-col gap-3">
              <Kolase2 src="/images/chapter1/sample.jpg" height="30vw" />
              <Kolase2 src="/images/chapter1/sample.jpg" height="30vw" />
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-3">
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="53vw"
                height="30vw"
              />
              <div className="flex flex-row gap-3">
                <Kolase2
                  src="/images/chapter1/sample.jpg"
                  width="25vw"
                  height="30vw"
                />
                <Kolase2
                  src="/images/chapter1/sample.jpg"
                  width="25vw"
                  height="30vw"
                />
              </div>
            </div>
          </div>
          <Link
            href={"/dokumentasi/day1"}
            className="bg-[#013047] text-[#F9C157] font-primeform px-[2vw] py-[0.5vw] rounded-4xl text-[10px] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-400 cursor-pointer text-center"
          >
            Lihat
          </Link>
        </div>
      </div>

      {/* day2 */}
      <div className="flex flex-col mt-[20vw] items-center">
        {/* nala */}
        <div
          data-aos="fade-right"
          className="w-full flex flex-row items-center justify-center"
        >
          <Image
            className="w-[30vw] h-auto"
            alt="nala"
            src="/images/selamatdatang/nala-menyapa2.webp"
            width={800}
            height={800}
          />
          <div className="flex flex-col text-[30px] font-bold font-storybook">
            <p> Day 2</p>
            <p>Pionir Kesatria 2025</p>
          </div>
        </div>

        {/* Kolase2 atas */}
        <div data-aos="fade-right" className="flex flex-col gap-2">
          <div className="flex flex-row gap-3">
            {/* col 1 */}
            <div className="flex flex-col gap-3">
              <Kolase2 src="/images/chapter1/sample.jpg" height="30vw" />
              <Kolase2 src="/images/chapter1/sample.jpg" height="30vw" />
            </div>
            {/* col 2 */}
            <div className="flex flex-col gap-3">
              <Kolase2
                src="/images/chapter1/sample.jpg"
                width="53vw"
                height="30vw"
              />
              <div className="flex flex-row gap-3">
                <Kolase2
                  src="/images/chapter1/sample.jpg"
                  width="25vw"
                  height="30vw"
                />
                <Kolase2
                  src="/images/chapter1/sample.jpg"
                  width="25vw"
                  height="30vw"
                />
              </div>
            </div>
          </div>
          <Link
            href={"/dokumentasi/day1"}
            className="bg-[#013047] text-[#F9C157] font-primeform px-[2vw] py-[0.5vw] rounded-4xl text-[10px] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:scale-105 transition duration-400 cursor-pointer text-center"
          >
            Lihat
          </Link>
        </div>
      </div>

      <div className="w-full h-[30vw]"></div>
    </div>
  );
};
export default Mobile;
