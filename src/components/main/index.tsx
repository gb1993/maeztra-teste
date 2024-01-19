import Banner from "./Banner";
import NewCollection from "./NewCollection";
import PartnerBrands from "./PartnerBrands";
import Shelf from "./Shelf";
import TipBar from "./TipBar";

const Main = () => {
  return (
    <main className="w-full">
      <Banner />
      <TipBar />
      <PartnerBrands />
      <Shelf />
      <NewCollection />
    </main>
  );
};

export default Main;
