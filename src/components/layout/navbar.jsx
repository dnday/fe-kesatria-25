"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Definisikan menu sebelum komponen
const MENU = [
  { name: "Beranda", link: "/" },
  { name: "Dokumentasi", link: "/dokumentasi" },
  { name: "Agenda", link: "/agenda" },
  { name: "Materi", link: "/materi" },
  { name: "FAQ", link: "/faq" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav className="fixed z-[100] flex w-full justify-between bg-gradient-to-r from-ungu-kesatria-2 from-50% to-ungu-kesatria px-[3.75vw] py-[0.25vw] font-primeform text-[1.25vw]/[1.5vw] text-oren-kesatria shadow-[0_0.6vw_10vw_0_#000000] duration-100 max-lg:hidden">
      <div className="flex items-center gap-x-[0.5vw] font-publica-sans font-bold">
        <Image
          className="aspect-auto w-[3.75vw]"
          alt="Logo Kesatria 2025"
          src="/images/logo/logo_yellow.svg"
          width={71}
          height={72}
        />
        <Link href={"/"} className="translate-y-[0.25vw]">
          PIONIR KESATRIA 2025
        </Link>
      </div>
      <div className="flex translate-y-[0.25vw] items-center gap-x-[3vw] font-publica-sans">
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
