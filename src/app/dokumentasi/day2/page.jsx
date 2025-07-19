import Desktop from "./desktop.jsx";
import Mobile from "./mobile.jsx";

const day2 = () => {
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
export default day2;
