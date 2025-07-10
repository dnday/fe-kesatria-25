import Link from "next/link";

const dokumentasi = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[5vw] min-h-screen text-white text-[3vw]">
      <Link href="/dokumentasi/day1">
        <div
          className="bg-cover w-[30vw] h-[20vw] rounded-3xl flex items-center justify-center transition duration-300 cursor-pointer border-8 border-[#A01326] hover:border-[#720e1b]"
          style={{
            backgroundImage: "url('/images/dokumentasi/thumbnail.webp')",
          }}
        >
          Day 1
        </div>
      </Link>

      <Link href="/dokumentasi/day2">
        <div
          className="bg-cover w-[30vw] h-[20vw] rounded-3xl flex items-center justify-center transition duration-300 cursor-pointer border-8 border-[#A01326] hover:border-[#720e1b]"
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
