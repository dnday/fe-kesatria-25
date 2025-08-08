"use client";
import { useState } from "react";
import Kolase from "../../../modular/kolase.jsx";
import Image from "next/image";

const Desktop = () => {
  const [previewSrc, setPreviewSrc] = useState(null); // src untuk modal

  const openPreview = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  const renderColumn = (imageList) => (
    <div className="flex flex-col gap-3">
      {imageList.map((img, i) => (
        <div key={i} onClick={() => openPreview(img.src)}>
          <Kolase src={img.src} height={img.height} width={img.width} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col justify-center w-full min-h-screen gap-[3vw]">
      {/* Kolase */}
      <div
        data-aos="fade-up"
        className="flex flex-row gap-[3vw] justify-center mt-[20vw] min-w-full"
      >
        {renderColumn([
          {
            src: "/images/dokumentasi/day2/1.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/2.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/3.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/4.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/5.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/6.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/7.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/8.webp",
            width: "40vw",
            height: "30vw",
          },
        ])}
        {renderColumn([
          {
            src: "/images/dokumentasi/day2/9.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/10.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/11.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/12.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/13.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/14.webp",
            width: "40vw",
            height: "50vw",
          },
          {
            src: "/images/dokumentasi/day2/15.webp",
            width: "40vw",
            height: "30vw",
          },
          {
            src: "/images/dokumentasi/day2/16.webp",
            width: "40vw",
            height: "50vw",
          },
        ])}
      </div>

      {/* Modal Preview */}
      {previewSrc && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={closePreview}
        >
          <div
            className="relative max-w-[70vw] max-h-[70vh] p-2 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewSrc}
              alt="Preview"
              width={1000}
              height={800}
              className="rounded-lg object-contain max-h-[90vh] w-auto"
            />
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:scale-105 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="w-full h-[25vw]"></div>
    </div>
  );
};

export default Desktop;
