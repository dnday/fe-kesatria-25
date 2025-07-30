"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { listPertanyaanUmum, listPertanyaanMateri } from "./listPertanyaan";
import AOS from "aos";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  const checkSearchResult = (searchTerm) => {
    let questionUmum = [];
    let questionMateri = [];

    if (searchTerm === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
      return;
    }

    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(searchTerm.toUpperCase())) {
        questionUmum.push(item);
      }
    });

    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(searchTerm.toUpperCase())) {
        questionMateri.push(item);
      }
    });

    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    checkSearchResult(value);
  };

  return (
    <div
      className="min-h-screen bg-[url('/images/background/pattern-parang-dark.svg')] bg-[size:80%] bg-repeat sm:bg-[size:75%] lg:bg-[size:70%] py-36 pb-[40vw] pt-[10vw]"
      style={{ backgroundSize: "100%, 100%, 100%" }}
    >
      <div className="container mx-auto py-6 px-6 mt-5 md:px-12 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          className="font-storybook text-4xl md:text-6xl lg:text-7xl text-[#ECC691] text-center mb-6 md:mb-8"
          style={{
            textShadow:
              "inset -1px -1px 0px 0px rgba(255,255,255,0.4), inset 1px 1px 0px 0px rgba(0,0,0,0.35)",
          }}
        >
          Frequently Asked Questions
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full max-w-5xl px-8 md:px-12 text-center font-primeform-medium text-lg md:text-2xl font-light text-[#ECC691] mb-10"
          style={{
            dropShadow: "-20px 4px 2px rgba(0,0,0,0.6)",
          }}
        >
          Temukan jawaban atas pertanyaan yang sering ditanyakan seputar
          kegiatan dan materi. Jika ada pertanyaan lain, jangan ragu untuk
          menghubungi kami.
        </p>

        <div className="w-full max-w-5xl space-y-8 md:space-y-20">
          <div data-aos="fade-up" data-aos-delay="200" className="w-full">
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
                className="block w-full p-4 pl-10 pr-24 text-base text-[#013047] font-primeform-medium border-2 border-[#A01326] rounded-lg bg-[#ECC691] focus:outline-none focus:ring-2 focus:ring-[#A01326] focus:border-[#A01326] placeholder-[#013047] placeholder-opacity-60"
                placeholder="Cari di sini..."
              />
              <button
                type="button"
                onClick={() => checkSearchResult(userInput)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-sm font-medium text-white bg-[#A01326] rounded-r-lg border border-[#A01326] hover:bg-[#7f0818] focus:ring-2 focus:outline-none focus:ring-[#A01326] transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
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
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#ECC691] w-full rounded-lg flex flex-col items-center pt-10 pb-20 px-8 md:px-16 shadow-lg border-2 border-[#A01326]"
          >
            <h2 className="font-storybook font-extrabold text-3xl md:text-4xl text-[#013047] mb-10">
              Pertanyaan Umum
            </h2>
            <div className="w-full space-y-6 md:space-y-8">
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
                    Tidak ada pertanyaan yang ditemukan untuk pencarian "
                    {userInput}"
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
      {/* Question Header */}
      <div
        onClick={handleClick}
        className={`
          flex flex-row gap-4 items-center px-5 py-4 
          text-[#013047] font-primeform-medium bg-[#F9C157] 
          border-2 border-[#A01326] cursor-pointer
          transition-all duration-150 ease-out
          hover:bg-[#F7B947] hover:shadow-lg
          ${isActive ? "rounded-t-lg" : "rounded-lg"}
        `}
      >
        <div className="font-bold text-[#A01326] text-lg">Q:</div>
        <div className="flex flex-row justify-between w-full items-center">
          <div className="w-[90%] text-justify font-medium pr-4">
            {question}
          </div>
          <RiArrowDownSLine
            size={24}
            className={`transition-transform duration-200 ease-out text-[#A01326] flex-shrink-0 ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {/* Answer Content - Simple & Smooth */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-row gap-4 bg-[#013047] bg-opacity-90 rounded-b-lg px-5 py-4 text-[#ECC691] font-primeform-medium text-base border-x-2 border-b-2 border-[#A01326]">
          <div className="font-bold text-[#F9C157] text-lg">A:</div>
          <div className="font-light leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
};
