import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";
import Image from "next/image";

const day2 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-row">
          <Image
            className="w-[30vw] h-auto mt-[10vw]"
            alt="nala"
            src="/images/selamatdatang/nala-menyapa2.webp"
            width={800}
            height={800}
          />
          <p
            data-aos="zoom-in"
            className="font-storybook text-[7vw] text-[#A01326] mt-[25vw]"
          >
            COMING SOON
          </p>
        </div>
        <div className="w-full h-[25vw]"></div>
      </div>
      {/* <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden">
        <Mobile />
      </div> */}
    </>
  );
};
export default day2;
