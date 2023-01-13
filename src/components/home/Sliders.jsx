//* Swiper Slider Components & Modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import clothing_production_1 from "../../assets/images/clothing_production_1.jpg";
import clothing_production_2 from "../../assets/images/clothing_production_2.webp";
import clothing_production_3 from "../../assets/images/clothing_production_3.jpg";

const BigSliderItems = [
  clothing_production_1,
  clothing_production_2,
  clothing_production_3,
];

const Sliders = () => {
  return (
    <section className="flex items-center gap-3" id="sliders">
      <Swiper
        autoplay
        //* install Swiper modules
        modules={[Autoplay]}
        className="w-9/12 rounded-2xl"
        slidesPerView={1}
        speed={2000}
      >
        {BigSliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-60"
              src={clothing_production_1}
              alt=""
              title=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        autoplay
        //* install Swiper modules
        modules={[Autoplay]}
        className="w-3/12 rounded-2xl"
        slidesPerView={1}
        speed={2000}
      >
        {BigSliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-60"
              src={clothing_production_1}
              alt=""
              title=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Sliders;
