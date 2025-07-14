import Grid1 from "./grid1.jsx";
import Grid2 from "./grid2.jsx";

const day1 = () => {
  return (
    <div
      data-aos="fade-up"
      className="relative min-h-screen flex flex-row items-center justify-center gap-2 md:gap-5 pt-[10px] xl:pt-[100px]"
    >
      <div className="flex flex-col items-center gap-3">
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid2 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
      </div>

      <div className="flex flex-col items-center gap-3">
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[25vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[20vw]" />
        <Grid1 src="/images/dokumentasi/contoh.webp" height="h-[15vw]" />
      </div>
      <div className="flex flex-col items-center gap-3">
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
