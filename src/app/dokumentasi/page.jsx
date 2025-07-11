import Link from "next/link";

const dokumentasi = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5vw] min-h-screen text-white text-[3vw] xl:flex-row">
      <Link href="/dokumentasi/day1">
        <div
          className="bg-cover w-[50vw] h-[40vw] rounded-3xl flex items-center justify-center transition duration-300 cursor-pointer border-8 border-[#A01326] hover:border-[#720e1b] xl:w-[25vw] xl:h-[15vw]"
          style={{
            backgroundImage: "url('/images/dokumentasi/thumbnail.webp')",
          }}
        >
          Day 1
        </div>
      </Link>

      <Link href="/dokumentasi/day2">
        <div
          className="bg-cover w-[50vw] h-[40vw] rounded-3xl flex items-center justify-center transition duration-300 cursor-pointer border-8 border-[#A01326] hover:border-[#720e1b] xl:w-[25vw] xl:h-[15vw]"
          style={{
            backgroundImage: "url('/images/dokumentasi/thumbnail.webp')",
          }}
        >
          Day 2
        </div>
      </Link>
    </div>
  );
};
export default dokumentasi;
