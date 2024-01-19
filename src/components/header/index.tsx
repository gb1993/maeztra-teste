import Modal from "../Modal";
import HeaderBottom from "./HeaderBottom";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full">
      <Modal />
      <HeaderTop />
      <HeaderMain />
      <HeaderBottom />
    </header>
  );
};

export default Header;
