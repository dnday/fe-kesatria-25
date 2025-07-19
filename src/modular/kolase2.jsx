"use client";
import Image from "next/image";

const kolase = ({ src, width = "20vw", height = "15vw" }) => {
  return (
    <div
      className="rounded-xl border-[#013047] border-5 bg-cover bg-center"
      style={{
        backgroundImage: `url(${src})`,
        width,
        height,
      }}
    ></div>
  );
};
export default kolase;
