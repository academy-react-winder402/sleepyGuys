import React from "react";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { getCourses } from "@/mock/getCourses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function CourseCardSlider() {
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
          slidesPerView: 3,
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
      {getCourses().map((course, index) => (
        <SwiperSlide key={index}>
          <CourseCard {...course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CourseCardSlider;
