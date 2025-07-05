import content from "../../../content/bagian1.js";
import Image from "next/image";

const Button = ({ className = "" }) => {
  return (
    <button
      className={`bg-[#A01326] text-[#ECC691] px-[2vw] py-[0.5vw] rounded-4xl text-[1.5vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer ${className}`}
    >
      Baca Modul
    </button>
  );
};

const Chapter1 = () => {
  return (
    <section className="relative flex flex-col items-center h-[200svh] text-[#013047]">
      <Image
        className="absolute w-[39vw] h-auto z-20 mt-[8vw]"
        alt="sayap"
        src="/images/chapter1/sayap-pair.webp"
        width={800}
        height={800}
      />
      <h1 className="text-[3vw] font-bold mt-[8vw]">{content.title1}</h1>
      <p className="text-[2vw] font-bold">{content.subTitle1}</p>
      <p className="text-[1.5vw] text-center mx-[10vw] mt-[1vw]">
        {content.content1}
      </p>

      <div className="w-[75vw] h-[60vw] bg-[#013047] mt-[1vw] rounded-4xl flex flex-col items-center border-6 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] lg:flex-row lg:h-[30vw]">
        <div className="w-[25vw] h-[25vw] bg-[#A01326] rounded-3xl ml-[2vw] border-6 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)]"></div>
        <p className=" w-[60vw] text-[7px] text-[#ECC691] text-center lg:text-[1.4vw] lg:text-left lg:[2vw] lg:w-[40vw] lg:mx-[2vw] lg:mb-0">
          {content.personalbranding}
        </p>
      </div>
      <Button className="mt-[-1vw]" />
    </section>
  );
};

export default Chapter1;
