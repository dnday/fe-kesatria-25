import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";
import Image from "next/image";

const dokumentasi = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-row items-center justify-center">
        <Image
          className="w-[25vw] h-auto mt-[10vw]"
          alt="nala"
          src="/images/selamatdatang/nala-menyapa2.webp"
          width={800}
          height={800}
        />
        <p
          data-aos="zoom-in"
          className="font-storybook text-[7vw] text-[#A01326]"
        >
          COMING SOON
        </p>
      </div>
      <div className="w-full h-[33vw] md:h-[25vw]"></div>
      {/* <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden">
        <Mobile />
      </div> */}
    </div>
  );
};
export default dokumentasi;
