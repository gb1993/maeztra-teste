import newCollectionBanner from "../../assets/images/newcollection-banner.png";

const NewCollection = () => {
  return (
    <section className="w-full px-6 mb-20 flex md:flex-row flex-col items-center justify-center max-w-3xl m-auto gap-6 md:gap-16">
      <div className="">
        <h2 className="font-bold text-2xl mb-4">Lorem ipsum</h2>
        <p className="text-sm md:w-[420px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <div className="w-full">
        <img
          src={newCollectionBanner}
          alt="banner nova coleção"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default NewCollection;
