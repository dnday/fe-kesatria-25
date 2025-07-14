import Image from "next/image";
import Kolase from "../../../modular/kolase.jsx";

const day1 = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen gap-[3vw]">
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
            width={800}
            height={1200}
          />
          <p className="text-[2.5vw] font-bold font-storybook">
            {" "}
            Day 1 Pionir Kesatria 2025
          </p>
        </div>

        {/* kolase atas */}
        <div data-aos="fade-left" className="flex flex-row gap-3">
          {/* col 1 */}
          <div className="flex flex-col gap-3">
            <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
            <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          </div>
          {/* col 2 */}
          <div className="flex flex-col gap-3">
            <Kolase
              src="/images/chapter1/sample.jpg"
              width="30vw"
              height="14.5vw"
            />
            <div className="flex flex-row gap-3">
              <Kolase
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
              <Kolase
                src="/images/chapter1/sample.jpg"
                width="14.5vw"
                height="15vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* kolase bawah */}
      <div
        data-aos="fade-up"
        className="flex flex-row gap-[3vw] justify-center"
      >
        <div className="flex flex-col gap-3">
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
        </div>
        <div className="flex flex-col gap-3">
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
        </div>
        <div className="flex flex-col gap-3">
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
        </div>
        <div className="flex flex-col gap-3">
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
          <Kolase src="/images/dokumentasi/contoh.webp" height="25vw" />
          <Kolase src="/images/chapter1/sample.jpg" height="15vw" />
        </div>
      </div>
    </div>
  );
};
export default day1;
