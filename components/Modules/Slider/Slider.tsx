import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import news1 from "@/public/icons/news/news1.png";
import { getNews } from "@/mock/getNews";
import NewsContent from "./Contents/NewsContent";
import { News } from "@/interfaces/news.interface";

export default function Slider() {
  return (
    <Swiper
      dir="ltr"
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[90%] sm:w-[92%] md:w-[85%] xl:w-[75%] sm:h-[250px] md:h-[280px] lg:h-[350px]"
    >
      {getNews().map((news: News, index: number) => (
        <SwiperSlide className="bg-white-100">
          <NewsContent key={index} img={news1} title={news.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
