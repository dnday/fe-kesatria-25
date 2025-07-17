import Image from "next/image";
import Kolase from "../../../modular/kolase.jsx";

const mobile = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div
        data-aos="fade-down"
        className="flex flex-row w-[50vw] items-center justify-center"
      >
        <Image
          className="w-[50vw] h-auto mt-[12vw]"
          alt="nala"
          src="/images/selamatdatang/nala-menyapa2.webp"
          width={800}
          height={1200}
        />
        <p className="text-[20px] font-bold font-storybook">
          {" "}
          Day 1 Pionir Kesatria 2025
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-[5vw]">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center gap-[3vw]"
        >
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col items-center gap-[3vw]"
        >
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="40vw"
          />
          <Kolase
            src="/images/chapter1/sample.jpg"
            width="40vw"
            height="30vw"
          />
        </div>
      </div>
      <div className="w-full h-[30vw]"></div>
    </div>
  );
};
export default mobile;
