import Grid1 from "./grid1.jsx";
import Grid2 from "./grid2.jsx";

const day1 = () => {
  return (
    <div data-aos="fade-up" className="flex flex-row justify-center gap-5">
      <div className="flex flex-col items-center gap-3 mt-[8vw]">
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
      </div>

      <div className="flex flex-col items-center gap-3 mt-[8vw]">
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
      </div>

      <div className="flex flex-col items-center gap-3 mt-[8vw]">
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
      </div>

      <div className="flex flex-col items-center gap-3 mt-[8vw]">
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
      </div>
    </div>
  );
};
export default day1;
