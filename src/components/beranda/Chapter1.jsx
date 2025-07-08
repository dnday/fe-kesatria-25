import content from "../../modular/bagian1.js";
import Image from "next/image";
import Button from "../../modular/Button.jsx";
import Box from "../../modular/Box.jsx";
import Sejarah from "./Sejarah.jsx";

const Chapter1 = () => {
  return (
    <section className="relative flex flex-col items-center h-[125svh] text-[#013047] md:h-[160svh] lg:h-[135svh] xl:h-[360svh]">
      <Image
        className="absolute w-[39vw] h-auto z-20 mt-[8vw]"
        alt="sayap"
        src="/images/chapter1/sayap-pair.webp"
        width={800}
        height={800}
      />
      <h1 className="text-[3vw] font-storybook mt-[8vw]">{content.title1}</h1>
      <p className="text-[2vw] font-storybook">{content.subTitle1}</p>
      <p className="text-[1.5vw] text-center mx-[10vw] mt-[1vw] font-primeform-medium">
        {content.content1}
      </p>

      <div className="w-[90vw] h-[60vw] bg-[#013047] mt-[1vw] rounded-4xl flex flex-col items-center border-6 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] lg:flex-row lg:w-[80vw] lg:min-h-[30vw]">
        <Box
          bgColor="#A01326"
          imageSrc="/images/chapter1/sample.jpg"
          w="25vw"
          h="25vw"
        />
        <p className=" w-[80vw] text-[7px] text-[#ECC691] text-center ml-[2vw] mt-[3vw] md:text-[1.5vw] lg:mt-[0] lg:text-left lg:w-[50vw] lg:mx-[2vw]">
          {content.personalbranding}
        </p>
      </div>
      <Button className="mt-[-1vw]" />
      <Image
        className="w-[20vw] h-auto mt-[3vw]"
        alt="awan"
        src="/images/chapter1/awan.webp"
        width={800}
        height={800}
      />
      <Sejarah />
    </section>
  );
};

export default Chapter1;
