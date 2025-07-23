import content from "../../modular/bagian1.js";
import Image from "next/image";
import Button from "../../modular/Button.jsx";
import Box from "../../modular/Box.jsx";
import Sejarah from "./Sejarah.jsx";

const Chapter1 = () => {
  return (
    <section className="relative flex flex-col items-center w-full text-[#013047]">
      <div data-aos="fade-up">
        <h1 className="text-[4vw] text-center font-storybook mt-[8vw]">
          {content.title1}
        </h1>
        <p className="text-[3vw] text-center font-storybook">
          {content.subTitle1}
        </p>
        <p className=" text-[10px] md:text-[1.5vw] text-center mx-[10vw] mt-[1vw] font-primeform-medium">
          {content.content1}
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="w-[90vw] bg-[#013047] mt-[1vw] rounded-4xl flex flex-col items-center border-6 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] lg:flex-row lg:w-[80vw]"
      >
        <Box
          bgColor="#A01326"
          imageSrc="/images/chapter1/sample.jpg"
          w="25vw"
          h="25vw"
        />
        <p className=" w-[80vw] text-[10px] p-3 text-[#ECC691] text-center ml-[2vw] mt-[3vw] md:text-[1.5vw] lg:mt-[0] lg:text-left lg:w-[50vw] lg:mx-[2vw]">
          {content.personalbranding}
        </p>
      </div>
      <div data-aos="fade-up">
        <Button
          className="mt-[-5vw] md:mt-[-1vw] z-30"
          href="https://drive.google.com/file/d/19y_12wJcJkrK3KziJYkH62Ak7aIU5Z2t/view?usp=sharing"
        />
      </div>
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
