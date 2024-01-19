import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { partnerBrands } from "../../api";

const PartnerBrands = () => {
  return (
    <section className="w-full mb-20 md:px-6 pl-6">
      <h2 className="text-color-2-500 font-bold text-3xl text-center mb-5">
        {partnerBrands[0].title}
      </h2>
      <div className="flex items-center justify-center max-w-3xl w-full m-auto gap-4">
        <Swiper
          className="relative"
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1.1}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {partnerBrands[0].partners.map((item, i) => (
            <SwiperSlide key={i}>
              <a href={item.link} key={item.id}>
                <img src={item.url} alt="parceiro" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerBrands;
