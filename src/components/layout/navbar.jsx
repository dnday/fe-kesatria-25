"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaCameraRetro,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed z-[100] hidden w-full justify-between bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A] px-6 py-2 font-primeform text-white shadow-lg md:flex">
        <div className="flex items-center gap-x-2 font-primeform font-bold">
          <Image
            className="h-auto w-10 md:w-12 lg:w-14"
            alt="Logo Kesatria 2025"
            src="/images/logo/logo_yellow.svg"
            width={71}
            height={72}
          />
          <Link
            href={"/"}
            className="text-sm md:text-base lg:text-lg text-[#FFE5C7]"
          >
            PIONIR KESATRIA 2025
          </Link>
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-8 font-primeform font-bold text-[#FFE5C7]">
          {MENU.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center text-sm md:text-base lg:text-lg hover:underline"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed z-[100] w-full bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A] text-[#FFE5C7] shadow-md md:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-x-2 font-primeform font-bold">
            <Image
              className="h-auto w-8"
              alt="Logo Kesatria 2025"
              src="/images/logo/logo_yellow.svg"
              width={71}
              height={72}
            />
            <Link href={"/"} className="text-sm">
              PIONIR KESATRIA 2024
            </Link>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 text-[#FFE5C7] focus:outline-none"
          >
            {toggle ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        {toggle && (
          <div className="px-4 font-primeform font-bold bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A]">
            {MENU.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex items-center py-2 hover:underline"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

const MENU = [
  {
    name: "Beranda",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Dokumentasi",
    link: "/dokumentasi",
    icon: <FaCameraRetro />,
  },
  {
    name: "FAQ",
    link: "/faq",
    icon: <FaQuestionCircle />,
  },
];
