import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { getCourses } from "@/mock/getCourses";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function NewCoursesBox() {
  return (
    <div className="mt-36 flex flex-wrap justify-between">
      <h1 className="font-peyda text-[35px] text-primary dark:text-primary-lighter mb-10 text-center w-full">
        جدید ترین دوره ها
      </h1>
      <Swiper
        slidesPerView={3}
        // spaceBetween={20}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:1,
          },
          768: {
            slidesPerView: 2,
          },
          865:{
            slidesPerView:2
          },
          1024:{
            slidesPerView:3
          },
          1500:{
            slidesPerView:3
          },
          1700:{
            slidesPerView:7
          }
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
    </div>
  );
}

export default NewCoursesBox;
