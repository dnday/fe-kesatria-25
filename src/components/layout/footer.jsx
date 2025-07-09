import Image from "next/image";
import Infobox from "./Infobox";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full mx-auto ">
      {/* Layer 1 */}
      <Image
        className="absolute w-[20vw] bottom-10 h-auto z-0 left-[7vw] md:w-[20vw]"
        alt="tugu"
        src="/images/footer/tugu.png"
        width={800}
        height={400}
      />
      <Image
        className="absolute bottom-0 w-[56vw] h-auto z-10 left-[15vw] md:w-[53vw]"
        alt="kaintengah"
        src="/images/footer/kainBiru.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-1 w-[15vw] h-[14vw] z-10 left-[76vw]"
        alt="gir"
        src="/images/footer/gir.png"
        width={500}
        height={500}
      />
      {/* Layer 2 */}
      <Image
        className="absolute bottom-0 w-[50vw] h-auto z-20 md:w-[34vw]"
        alt="gir"
        src="/images/footer/merahKiri.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-0 w-[50vw] h-auto z-20 right-0 md:w-[40vw]"
        alt="gir"
        src="/images/footer/merahKanan.png"
        width={500}
        height={500}
      />
      <Image
        className="absolute bottom-4 w-[17vw] h-auto z-20 right-2 md:bottom-0"
        alt="gir"
        src="/images/footer/burung.png"
        width={800}
        height={800}
      />
      <div className="flex justify-center">
        <Infobox />
      </div>

      {/* Title Kesatria 2025 */}
      <Link href={"./"}>
        <Image
          className="absolute bottom-[1vw] w-[18vw] h-auto ml-[1.5vw] z-20 cursor-pointer hover:scale-110 duration-300"
          alt="gir"
          src="/images/footer/title2.png"
          width={800}
          height={800}
        />
      </Link>
    </footer>
  );
};

export default Footer;
