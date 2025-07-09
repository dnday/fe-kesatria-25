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
    <div className="min-h-screen bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] py-36 pb-[20vw] pt-[10vw]"
      style={{ backgroundSize: "100%, 100%, 100%" }}>
      
      {/* Decorative Images */}
      <div className="fixed h-28 w-28 md:h-48 md:w-48 top-24 sm:top-12 md:top-0 lg:top-12 left-0 pointer-events-none opacity-70">
        <Image src="/buwong_merah.svg" fill alt="Decorative bird" />
      </div>
      <div className="fixed h-20 w-20 md:h-28 md:w-28 top-28 md:top-4 right-0 pointer-events-none opacity-70">
        <Image src="/Bunga_kanan.svg" fill alt="Decorative flower right" />
      </div>
      <div className="fixed h-20 w-20 md:h-28 md:w-28 bottom-10 left-0 pointer-events-none opacity-70">
        <Image src="/bunga_kiri.svg" fill alt="Decorative flower left" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          className="font-storybook text-4xl md:text-5xl lg:text-6xl text-[#ECC691] text-center mb-4"
          style={{
            textShadow: "inset -1px -1px 0px 0px rgba(255,255,255,0.4), inset 1px 1px 0px 0px rgba(0,0,0,0.35)"
          }}
        >
          Frequently Asked Questions
        </h1>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="w-full max-w-4xl px-6 text-center font-primeform-medium text-lg md:text-xl lg:text-2xl font-light text-[#ECC691] mb-8"
          style={{
            dropShadow: "-20px 4px 2px rgba(0,0,0,0.6)"
          }}
        >
          Temukan jawaban atas pertanyaan yang sering ditanyakan seputar kegiatan dan materi. Jika ada pertanyaan lain, jangan ragu untuk menghubungi kami.
        </p>
        
        {/* Main Content Area */}
        <div className="w-full max-w-4xl space-y-16">
          {/* Search Form */}
          <form
            data-aos="fade-up"
            data-aos-delay="200"
            onSubmit={handleSubmit}
            className="w-full"
          >
            <label htmlFor="default-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                onChange={handleChange}
                value={userInput}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-base text-[#013047] font-primeform-medium border-2 border-[#A01326] rounded-lg bg-[#ECC691] focus:outline-none focus:ring-2 focus:ring-[#A01326] focus:border-[#A01326] placeholder-[#013047] placeholder-opacity-60"
                placeholder="Cari di sini..."
              />
              <button
                type="submit"
                className="text-[#ECC691] absolute right-2.5 bottom-2.5 bg-[#A01326] hover:bg-[#8a1020] hover:shadow-[0_0_15px_rgba(255,209,63,0.7)] hover:border-2 hover:border-[#F9C157] focus:outline-none active:scale-95 font-primeform-medium font-medium rounded-lg text-base px-4 py-2 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {/* FAQ Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#ECC691] w-full rounded-lg flex flex-col items-center pt-8 pb-16 px-6 md:px-10 shadow-lg border-2 border-[#A01326]"
          >
            <h2 className="font-storybook font-extrabold text-2xl md:text-3xl text-[#013047] mb-8">
              Pertanyaan Umum
            </h2>
            <div className="w-full space-y-4">
              {foundPertanyaanUmum.length > 0 ? (
                foundPertanyaanUmum.map((item, i) => (
                  <QAPlaceholder
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#013047] font-primeform-medium">
                    Tidak ada pertanyaan yang ditemukan untuk pencarian "{userInput}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const QAPlaceholder = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className="flex flex-row gap-4 items-center px-5 py-4 text-[#013047] font-primeform-medium bg-[#F9C157] rounded-lg transition-all duration-300 hover:shadow-md border-2 border-[#A01326] cursor-pointer"
      >
        <div className="font-bold text-[#A01326] text-lg">Q:</div>
        <div className="flex flex-row justify-between w-full items-center">
          <div className="w-[90%] text-justify font-medium pr-4">{question}</div>
          <RiArrowDownSLine
            size={24}
            className={`duration-300 transform text-[#A01326] flex-shrink-0 ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-row gap-4 bg-[#013047] bg-opacity-90 rounded-b-lg px-5 py-4 text-[#ECC691] font-primeform-medium text-base border-x-2 border-b-2 border-[#A01326] mt-1">
          <div className="font-bold text-[#F9C157] text-lg">A:</div>
          <div className="font-light leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
};
