const Box = ({ bgColor = "#A01326", imageSrc, w = "25vw", h = "25vw" }) => {
  return (
    <div
      className="rounded-3xl ml-[2vw] p-2 border-4 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] z-10"
      style={{
        backgroundColor: bgColor,
        borderColor: bgColor,
        width: w,
        height: h,
      }}
    >
      <Image
        className="w-full h-full object-cover rounded-3xl"
        alt="image"
        src={imageSrc}
        width={800}
        height={800}
      />
    </div>
  );
};
export default Box;
import Image from "next/image";
