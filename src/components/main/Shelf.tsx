import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowIcon } from "../../assets/icons";
import { products } from "../../api";

const Shelf = () => {
  return (
    <section className="w-full mb-20 md:px-6 pl-6">
      <div className="max-w-3xl w-full m-auto">
        <h2 className="text-center font-bold text-color-2-500 text-3xl mb-5">
          {products[0].title}
        </h2>
        <Swiper
          className="relative"
          modules={[Navigation]}
          spaceBetween={14}
          slidesPerView={1.1}
          navigation={false}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 3,
              navigation: {
                nextEl: ".shelf-swiper-button-next",
                prevEl: ".shelf-swiper-button-prev",
              },
            },
            1280: {
              slidesPerView: 5,
              navigation: {
                nextEl: ".shelf-swiper-button-next",
                prevEl: ".shelf-swiper-button-prev",
              },
            },
          }}
        >
          {products[0].items.map((product) => (
            <SwiperSlide key={product.productID}>
              <a href={product.productURL}>
                <article>
                  <img
                    src={product.productImage}
                    alt="imagem do produto"
                    className="w-full mb-2"
                  />
                  <div className="px-7">
                    <ul className="flex items-center justify-between w-[132px] mb-2">
                      {product.sku.colors.map((item, i) => (
                        <li
                          className={`rounded w-7 h-7`}
                          style={{ backgroundColor: item.color }}
                          key={i + 100}
                        />
                      ))}
                    </ul>
                    <p className="text-color-2-500 font-bold text-xl mb-1">
                      {product.productPrice.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <h4 className="text-base mb-2">{product.productTitle}</h4>
                    <p className="text-xs mb-2">{product.productDescription}</p>
                    <button className="w-full h-9 rounded bg-color-1-500 text-base text-white">
                      Adicionar
                    </button>
                  </div>
                </article>
              </a>
            </SwiperSlide>
          ))}
          <button className="shelf-swiper-button-prev hidden md:block">
            <ArrowIcon side="left" />
          </button>
          <button className="shelf-swiper-button-next hidden md:block">
            <ArrowIcon side="right" />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Shelf;
