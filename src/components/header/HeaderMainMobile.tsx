import maeztraLogo from "../../assets/images/logo-maeztra-novo.png";
import {
  BagIconMobile,
  HamburgueMenuIcon,
  SearchIcon,
} from "../../assets/icons";

const HeaderMainMobile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <button>
          <HamburgueMenuIcon />
        </button>
        <a href="/">
          <img src={maeztraLogo} alt="maeztra logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-10">
        <button>
          <SearchIcon />
        </button>
        <button>
          <BagIconMobile />
        </button>
      </div>
    </div>
  );
};

export default HeaderMainMobile;
