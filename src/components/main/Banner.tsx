import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroBanner from "../../assets/images/Banner-hero.png";
import heroBannerMobile from "../../assets/images/Banner-hero-mobile.png";
import { ArrowIcon } from "../../assets/icons";

const Banner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide key="1">
          <a href="#">
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBanner} />
              <img
                src={heroBannerMobile}
                alt="Hero Banner"
                className="w-full"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide key="2">
          <a href="#">
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBanner} />
              <img
                src={heroBannerMobile}
                alt="Hero Banner"
                className="w-full"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide key="3">
          <a href="#">
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBanner} />
              <img
                src={heroBannerMobile}
                alt="Hero Banner"
                className="w-full"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide key="4">
          <a href="#">
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBanner} />
              <img
                src={heroBannerMobile}
                alt="Hero Banner"
                className="w-full"
              />
            </picture>
          </a>
        </SwiperSlide>
        <SwiperSlide key="5">
          <a href="#">
            <picture>
              <source media="(min-width: 768px)" srcSet={heroBanner} />
              <img
                src={heroBannerMobile}
                alt="Hero Banner"
                className="w-full"
              />
            </picture>
          </a>
        </SwiperSlide>
        <button className="swiper-button-prev">
          <ArrowIcon side="left" />
        </button>
        <button className="swiper-button-next">
          <ArrowIcon side="right" />
        </button>
      </Swiper>
    </section>
  );
};

export default Banner;
