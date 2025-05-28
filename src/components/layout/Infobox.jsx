import Image from "next/image";

const Infobox = () => {
  return (
    <div
      className="absolute flex justify-center items-center w-[50vw] h-[13vw] bg-[#EBE2B7] z-30 bottom-5 border-2 border-[#EBE2B7] shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)]
    md:w-[32vw] md:h-[8vw] md:bottom-[3vw] md:border-4"
    >
      <Image
        className="absolute left-[6vw] w-[6vw] h-auto z-20 -translate-y-2 md:w-[5vw] md:-translate-y-[1vw]"
        alt="logo"
        src="/images/footer/logowarna.png"
        width={800}
        height={800}
      />
      <div className="flex flex-col">
        <div className="flex flex-col ml-[12vw] text-black md:ml-[10vw]">
          <p className="font-primeform font-bold text-[8px] md:text-[1.5vw]">
            FAKULTAS TEKNIK
          </p>
          <p className="font-primeform text-[5px] md:text-[0.7vw]">
            JALAN GRAFIKA, MLATI, YOGYAKARTA 55281
          </p>
        </div>
        <div className="flex space-x-1 md:space-x-3 md:mt-2 text-black">
          <a
            href="https://www.instagram.com/pionirkesatria_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <Image
              className="relative w-[6vw] h-auto md:top-[-2px] md:w-[3vw]"
              alt="ikon"
              src="/images/footer/3ikon.png"
              width={500}
              height={500}
            />
            <span className="text-[7px] md:text-[1vw]">pionirkesatria_</span>
          </a>
          <div className="flex items-center space-x-1">
            <Image
              className="w-[2vw] h-auto md:w-[1vw]"
              alt="ikon"
              src="/images/footer/line.png"
              width={500}
              height={500}
            />
            <span className="text-[7px] md:text-[1vw]">nrb256a</span>
          </div>
          <a
            href="https://www.youtube.com/@PIONIRKESATRIA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <Image
              className="w-[2vw] h-auto md:w-[1vw]"
              alt="ikon"
              src="/images/footer/youtube.png"
              width={500}
              height={500}
            />
            <span className="text-[5px] md:text-[1vw]">PIONIR KESATRIA</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infobox;
