import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";

const dokumentasi = () => {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden">
        <Mobile />
      </div>
    </>
  );
};
export default dokumentasi;
