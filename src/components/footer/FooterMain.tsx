import FooterMainDesktop from "./FooterMainDesktop";
import FooterMainMobile from "./FooterMainMobile";

const FooterMain = () => {
  const { innerWidth: width } = window;
  return (
    <section className="w-full mb-20 px-6">
      {width >= 768 ? <FooterMainDesktop /> : <FooterMainMobile />}
    </section>
  );
};

export default FooterMain;
