import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";
import Image from "next/image";

const day2 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="hidden md:block">
          <Desktop />
        </div>
        <div className="md:hidden">
          <Mobile />
        </div>
        <div className="w-full h-[25vw]"></div>
      </div>
    </>
  );
};
export default day2;
