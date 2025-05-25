"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // These state and functions will be used for mobile menu functionality
  // Keeping them for future implementation
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav
      className={
        "fixed z-[100] flex w-full justify-between bg-gradient-to-r  from-[#065B5B] from-50% to-[#035A7A] px-[3.75vw] py-[0.25vw] font-primeform text-[1.25vw]/[1.5vw] text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000] duration-100 max-lg:hidden"
      }
    >
      <div className="flex items-center gap-x-[0.5vw] font-primeform font-bold">
        <Image
          className="aspect-auto w-[3.75vw]"
          alt="Logo Kesatria 2025"
          src="/images/logo/logo_yellow.svg"
          width={71}
          height={72}
        />
        <Link href={"/"} className="translate-y-[0.25vw]">
          PIONIR KESATRIA 2024
        </Link>
      </div>
      <div className="flex translate-y-[0.25vw] items-center gap-x-[3vw] font-primeform font-bold">
        {MENU.map((item, index) => (
          <Link href={item.link} key={index} className="hover:underline">
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

const MENU = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Dokumentasi",
    link: "/dokumentasi",
  },
  // {
  //   name: "Agenda",
  //   link: "/agenda",
  // },
  // {
  //   name: "Materi",
  //   link: "/materi",
  // },
  {
    name: "FAQ",
    link: "/faq",
  },
];
