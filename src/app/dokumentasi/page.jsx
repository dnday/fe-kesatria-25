import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";
import Image from "next/image";

const dokumentasi = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="w-full h-[10vw] md:h-[0]"></div>
    </div>
  );
};
export default dokumentasi;
