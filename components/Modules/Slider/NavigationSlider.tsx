import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function NavigationSlider({
  data,
  Content,
}: {
  data: any[];
  Content: React.ElementType;
}) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      navigation={true}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        750: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
        1700: {
          slidesPerView: 4,
        },
        3100: {
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Content {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NavigationSlider;
