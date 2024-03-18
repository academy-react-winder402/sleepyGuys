import React from "react";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { getCourses } from "@/mock/getCourses";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function CourseCardSlider() {
  return (
    <Swiper
      slidesPerView={3}
      // spaceBetween={20}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 3,
        },
        1700: {
          slidesPerView: 7,
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
      className="mySwiper"
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
