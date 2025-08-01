import content from "../../modular/bagian1.js";
import Button from "../../modular/Button.jsx";
import Box from "../../modular/Box.jsx";
import Image from "next/image";
import LazyYouTube from "@/components/common/LazyYouTube";
import { motion } from "framer-motion";

const Sejarah = () => {
  return (
    <div>
      <div className="flex flex-col self-start lg:flex-row mt-[5vw]">
        <div className="flex flex-row">
          <Image
            className="w-[50vw] h-auto lg:w-[20vw]"
            alt="katrol"
            src="/images/chapter1/katrol.webp"
            width={800}
            height={800}
          />
          <div data-aos="fade-right" className="flex flex-col mt-[5vw] z-10">
            <p className="text-[5vw] sm:text-[4.5vw] md:text-[4.2vw] lg:text-[4vw] font-storybook">
              {content.title2}
            </p>
            <p className="text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] w-[35vw] text-justify font-primeform-medium leading-relaxed">
              {content.content2}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col mt-[-25vw] md:mt-[-50vw] ml-[50vw] z-10 lg:mt-0 lg:ml-[10vw]"
        >
          <div
            data-aos="zoom-in"
            className="relative mt-[15vw] md:mt-[5vw] h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:w-[35vw] md:rounded-4xl md:p-2"
          >
            <LazyYouTube
              videoId="RFMczbX3Lsc"
              title="Sejarah Kesatria Video 1"
              className="w-full mx-auto aspect-video rounded-2xl"
            />
          </div>
          <Image
            className="w-[40vw] h-auto ml-[10vw] mt-[-8vw] lg:w-[37vw] lg:ml-[5vw] z-20"
            alt="pitakuning"
            src="/images/chapter1/pitakuning1.webp"
            width={800}
            height={200}
          />
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col items-center">
        <p className="text-[5vw] sm:text-[4.5vw] md:text-[4.2vw] lg:text-[4vw] font-storybook">
          {content.title3}
        </p>
        <p className="text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] w-[80vw] font-primeform-medium text-justify leading-relaxed">
          {content.content3}
        </p>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="w-[15vw] h-auto mt-[3vw] z-0 mb-[-10vw] ml-[30vw]"
        >
          <Image
            alt="awan"
            src="/images/chapter1/gearkuning.webp"
            width={800}
            height={200}
          />
        </motion.div>
        <div
          data-aos="zoom-in"
          className="relative h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:w-[35vw] md:rounded-4xl md:p-2"
        >
          <LazyYouTube
            videoId="jbaLBFLdMMA"
            title="Sejarah Kesatria Video 2"
            className="w-full mx-auto aspect-video rounded-2xl"
          />
        </div>
        <Image
          className="w-[50vw] h-auto z-20 mt-[-10vw] mr-[50vw]"
          alt="awan"
          src="/images/chapter1/pitacoklat1.webp"
          width={800}
          height={200}
        />
      </div>
    </div>
  );
};
export default Sejarah;
