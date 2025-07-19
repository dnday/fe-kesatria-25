import content from "../../modular/bagian1.js";
import Button from "../../modular/Button.jsx";
import Box from "../../modular/Box.jsx";
import Image from "next/image";

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
            <div className="flex flex-row">
              <p className="text-[4vw] font-storybook">{content.title2}</p>
              {/* <Image
                className="w-[7vw] h-auto mt-[-3vw] mx-[1vw]"
                alt="bulu"
                src="/images/chapter1/bulu.webp"
                width={800}
                height={800}
              /> */}
            </div>
            <p className="text-[10px] md:text-[1.5vw] w-[35vw] font-primeform-medium">
              {content.content2}
            </p>
            <Button className="mt-[1vw] text-center" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col mt-[-30vw] md:mt-[-50vw] ml-[50vw] z-10 lg:mt-0 lg:ml-[10vw]"
        >
          <div
            data-aos="zoom-in"
            className="relative mt-[5vw] h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:w-[35vw] md:rounded-4xl md:p-2"
          >
            <iframe
              className="w-full mx-auto aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/RFMczbX3Lsc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Image
            className="w-[40vw] h-auto ml-[10vw] mt-[-8vw] lg:w-[37vw] lg:ml-[5vw] z-20"
            alt="awan"
            src="/images/chapter1/pitakuning1.webp"
            width={800}
            height={200}
          />
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col items-center">
        <p className="text-[4vw] font-storybook">{content.title3}</p>
        <p className="text-[10px] md:text-[1.5vw] w-[80vw] font-primeform-medium text-center">
          {content.content3}
        </p>
        <Button />
        <Image
          className="w-[15vw] h-auto mt-[3vw] z-0 mb-[-10vw] ml-[30vw]"
          alt="awan"
          src="/images/chapter1/gearkuning.webp"
          width={800}
          height={200}
        />
        <div
          data-aos="zoom-in"
          className="relative h-auto w-[45vw] bg-[#A01326] rounded-2xl border-6 border-[#A01326] z-10 md:w-[35vw] md:rounded-4xl md:p-2"
        >
          <iframe
            className="w-full mx-auto aspect-video rounded-2xl"
            src="https://www.youtube.com/embed/jbaLBFLdMMA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
