"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCameraRetro,
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaMapMarkedAlt,
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
      <nav className="fixed z-[2000] hidden w-full justify-between bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A] px-6 py-3 font-primeform text-white shadow-lg md:flex">
        <div className="flex items-center gap-x-2 font-primeform font-bold text-sm md:text-base lg:text-lg">
          <Image
            className="h-auto w-10 md:w-12 lg:w-14"
            alt="Logo Kesatria 2025"
            src="/images/logo/logo_yellow.svg"
            width={71}
            height={72}
          />
          <Link
            href={"/"}
            className="font-primeform-bold text-sm md:text-base lg:text-lg text-[#FFE5C7]"
          >
            PIONIR KESATRIA 2025
          </Link>
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-8 font-primeform font-bold text-[#FFE5C7] text-sm md:text-base lg:text-lg">
          {MENU.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.link}
                className="flex items-center hover:underline transition-all duration-200 ease-in-out"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed z-[2000] w-full bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A] text-[#FFE5C7] shadow-md md:hidden">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center gap-x-2 font-primeform font-bold text-sm">
            <Image
              className="h-auto w-8"
              alt="Logo Kesatria 2025"
              src="/images/logo/logo_yellow.svg"
              width={71}
              height={72}
            />
            <Link href={"/"} className="text-sm">
              PIONIR KESATRIA 2025
            </Link>
          </div>
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="p-2 text-[#FFE5C7] focus:outline-none transition-transform duration-200 ease-in-out hover:scale-110"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: toggle ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {toggle ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="px-4 font-primeform font-bold bg-gradient-to-r from-[#065B5B] from-50% to-[#035A7A] text-sm"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                {MENU.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 },
                        },
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 },
                        },
                      },
                    }}
                  >
                    <Link
                      href={item.link}
                      className="flex items-center py-2 hover:underline transform transition-all duration-200 ease-in-out hover:translate-x-2"
                      onClick={() => setToggle(false)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
  {
    name: "Peta",
    link: "/peta",
    icon: <FaMapMarkedAlt />,
  },
];
