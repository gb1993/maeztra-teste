import HeaderMainDesktop from "./HeaderMainDesktop";
import HeaderMainMobile from "./HeaderMainMobile";

const HeaderMain = () => {
  const { innerWidth: width } = window;
  return (
    <section className="w-full p-6 shadow-md">
      {width > 1080 ? <HeaderMainDesktop /> : <HeaderMainMobile />}
    </section>
  );
};

export default HeaderMain;
