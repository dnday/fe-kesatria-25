"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { listPertanyaanUmum, listPertanyaanMateri } from "./listPertanyaan";
import AOS from "aos";
import Image from "next/image";

export default function Faq() {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  });

  const checkSearchResult = () => {
    let questionUmum = [];
    let questionMateri = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background decorative images - placed first with lowest z-index */}
      <div className="absolute h-full w-28 md:w-48 top-24 sm:top-12 md:top-0 lg:top-12 z-[1] self-start pointer-events-none">
        <Image src="/buwong_merah.svg" fill alt="Decorative bird" />
      </div>
      <div className="absolute h-full w-20 top-28 md:top-4 md:w-28 z-[1] self-end pointer-events-none">
        <Image src="/Bunga_kanan.svg" fill alt="Decorative flower right" />
      </div>
      <div className="absolute h-full w-20 bottom-0 md:w-28 z-[1] self-start pointer-events-none">
        <Image src="/bunga_kiri.svg" fill alt="Decorative flower left" />
      </div>

      {/* Main content area */}
      <div className="relative py-36 min-h-screen bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] pb-[20vw] pt-[10vw] flex flex-col items-center justify-center z-[10]"
        style={{ backgroundSize: "100%, 100%, 100%" }}>
        
        <h1
          data-aos="fade-up"
          className="relative font-storybook text-4xl text-[#ECC691] text-center text-shadow-[inset_-1px_-1px_0px_0px_#FFFFFF40, inset_1px_1px_0px_0px_#00000059] mb-4 z-[20]"
        >
          Frequently Asked Questions
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="w-[80vw] px-[6vw] text-center font-primeform-medium text-[1.2vw]/[1.8vw] md:text-[2vw]/[2.5vw] lg:text-[1.5vw]/[2vw] font-light text-[#ECC691] drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)] mb-8 z-[20]"
        >
          Temukan jawaban atas pertanyaan yang sering ditanyakan seputar kegiatan dan materi. Jika ada pertanyaan lain, jangan ragu untuk menghubungi kami.
        </p>
        
        <main className="w-[90%] md:w-2/3 mt-10 space-y-16 relative z-[30]">
          {/*Search input*/}
          <form
            data-aos="fade-up"
            data-aos-delay="200"
            onSubmit={(e) => handleSubmit(e)}
            className="relative z-[40]"
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-neutral-100 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-[41]">
                <svg
                  className="w-4 h-4 text-[#013047]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => handleChange(e)}
                value={userInput}
                type="search"
                id="default-search"
                className="relative block w-full p-4 pl-10 text-base text-[#013047] font-primeform-medium border border-[#A01326] rounded-lg bg-[#ECC691] focus:outline-none focus:ring-[#A01326] focus:border-[#A01326] placeholder-[#013047] placeholder-opacity-60 z-[42]"
                placeholder="Cari di sini..."
              />
              <button
                type="submit"
                className="text-[#ECC691] hidden md:block absolute right-2.5 bottom-2.5 bg-[#A01326] hover:bg-[#8a1020] hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-[2px] hover:border-[#F9C157] focus:outline-none active:scale-95 font-primeform-medium font-medium rounded-lg text-base px-4 py-2 transition-all duration-300 z-[43]"
              >
                Search
              </button>
            </div>
          </form>

          {/*Accordions group*/}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            about="Pertanyaan umum"
            className="bg-[#ECC691] w-full rounded-lg flex relative flex-col items-center pt-5 pb-16 px-10 shadow-lg border-2 border-[#A01326] z-[40]"
          >
            <h1 className="font-storybook font-extrabold text-xl text-[#013047] mb-2">
              Pertanyaan umum
            </h1>
            <div className="w-full space-y-5 mt-5">
              {foundPertanyaanUmum.map((item, i) => {
                return (
                  <QAPlaceholder
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </div>
          </div>
          {/* <div
            about="Pertanyaan Materi"
            className="bg-[#ECC691] w-full rounded-lg flex flex-col items-center pt-5 pb-16 px-10 shadow-lg border-2 border-[#A01326] z-[40]"
          >
            <h1 className="font-storybook font-extrabold text-xl text-[#013047] mb-2">
              Seputar Materi
            </h1>
            <div className="w-full space-y-5 mt-5">
              {foundPertanyaanMateri.map((item, i) => {
                return (
                  <QAPlaceholder
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
}

const QAPlaceholder = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="flex flex-col cursor-pointer transition-all duration-300 relative z-[50]"
    >
      <div
        className={
          "flex flex-row gap-4 items-center px-5 py-3 text-[#013047] font-primeform-medium bg-[#F9C157] relative rounded-lg transition-all duration-300 hover:shadow-md border border-[#A01326] z-[51]"
        }
      >
        <div className="font-bold text-[#A01326]">Q:</div>
        <div className="flex flex-row justify-between w-full">
          <div className="w-[90%] text-justify select-none font-medium">{question}</div>
          <RiArrowDownSLine
            size={24}
            className={
              "duration-300 transform text-[#A01326] " + (isActive ? "rotate-180" : "rotate-0")
            }
          />
        </div>
      </div>
      <div
        className={
          "overflow-hidden transition-all duration-300 " +
          (isActive ? "max-h-screen" : "max-h-0")
        }
      >
        <div
          className={
            "select-none flex flex-row gap-4 bg-[#013047] bg-opacity-90 rounded-lg pt-5 mt-[-15px] text-[#ECC691] font-primeform-medium text-base px-5 py-4 transition-opacity duration-300 border-x border-b border-[#A01326] z-[52] " +
            (isActive ? "opacity-100" : "opacity-0")
          }
        >
          <div className="font-bold text-[#F9C157]">A:</div>
          <div className="font-light">{answer}</div>
        </div>
      </div>
    </div>
  );
};
