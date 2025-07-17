"use client";
import Image from "next/image";

const kolase = ({ src, width = "20vw", height = "15vw" }) => {
  return (
    <div
      className="rounded-xl border-[#013047] border-5 bg-cover bg-center hover:shadow-2xl transition duration-300"
      style={{
        backgroundImage: `url(${src})`,
        width,
        height,
      }}
    ></div>
  );
};
export default kolase;
