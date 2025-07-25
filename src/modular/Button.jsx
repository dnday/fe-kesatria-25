import Link from "next/link";

const Button = ({ className = "", href = "#" }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#A01326] text-[#F9C157] font-storybook px-[4vw] py-[2vw] rounded-4xl text-[3vw] sm:text-[1.5vw] sm:py-[1vw] sm:px-[2vw] font-bold shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3)] hover:bg-[#7f0818] cursor-pointer ${className}`}
    >
      Baca Modul
    </Link>
  );
};

export default Button;
