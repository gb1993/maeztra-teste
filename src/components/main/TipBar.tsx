import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { tipBar } from "../../api";

const TipBar = () => {
  return (
    <section className="w-full md:px-6 pl-6 mb-20">
      <h3 className="font-bold text-base text-center my-5 text-color-2-500">
        {tipBar[0].title}
      </h3>
      <div className="w-full max-w-3xl m-auto flex items-center justify-center gap-4">
        <Swiper
          className="relative"
          spaceBetween={16}
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
          {tipBar[0].items?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center h-16 gap-5 bg-color-4-500 text-color-2-500 rounded">
                <img src={item.icon} alt="icone" className="w-8" />
                <div className="text-color-2-500">
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TipBar;
