import Image from "next/image";
import OptimizedImage from "../OptimizedImage";
import Infobox from "./Infobox";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full mx-auto">
      {/* Layer 1 */}
      <OptimizedImage
        className="absolute w-[20vw] bottom-10 h-auto z-0 left-[7vw] md:w-[20vw]"
        alt="tugu"
        src="/images/footer/tugu.png"
        width={800}
        height={400}
        optimizationType="background"
        sizes="(max-width: 768px) 30vw, 20vw"
      />
      <OptimizedImage
        className="absolute bottom-0 w-[56vw] h-auto z-10 left-[15vw] md:w-[53vw]"
        alt="kain tengah biru"
        src="/images/footer/kainBiru.png"
        width={500}
        height={500}
        optimizationType="background"
        sizes="(max-width: 768px) 70vw, 56vw"
      />
      <OptimizedImage
        className="absolute bottom-1 w-[15vw] h-[14vw] z-10 left-[76vw]"
        alt="gir"
        src="/images/footer/gir.png"
        width={500}
        height={500}
        optimizationType="background"
        sizes="(max-width: 768px) 20vw, 15vw"
      />
      {/* Layer 2 */}
      <OptimizedImage
        className="absolute bottom-0 w-[50vw] h-auto z-20 md:w-[34vw]"
        alt="kain merah kiri"
        src="/images/footer/merahKiri.png"
        width={500}
        height={500}
        optimizationType="background"
        sizes="(max-width: 768px) 60vw, 50vw"
      />
      <OptimizedImage
        className="absolute bottom-0 w-[50vw] h-auto z-20 right-0 md:w-[40vw]"
        alt="kain merah kanan"
        src="/images/footer/merahKanan.png"
        width={500}
        height={500}
        optimizationType="background"
        sizes="(max-width: 768px) 60vw, 50vw"
      />
      <OptimizedImage
        className="absolute bottom-4 w-[17vw] h-auto z-20 right-2 md:bottom-0"
        alt="burung"
        src="/images/footer/burung.png"
        width={800}
        height={800}
        optimizationType="background"
        sizes="(max-width: 768px) 25vw, 17vw"
      />
      <div className="flex justify-center">
        <Infobox />
      </div>

      {/* Title Kesatria 2025 */}
      <Link href={"./"}>
        <OptimizedImage
          className="absolute bottom-[1vw] w-[18vw] h-auto ml-[1.5vw] z-20 cursor-pointer hover:scale-110 duration-300"
          alt="title kesatria 2025"
          src="/images/footer/title2.png"
          width={800}
          height={800}
          optimizationType="hero"
          priority={true}
          sizes="(max-width: 768px) 25vw, 18vw"
        />
      </Link>
    </footer>
  );
};

export default Footer;
