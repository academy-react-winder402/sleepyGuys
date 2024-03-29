import NewsCard from "@/components/Templates/Landing/News/NewsCard";
import { News } from "@/interfaces/news.interface";
import React from "react";
import { SwiperSlide } from "swiper/react";

export default function NewsSliderContent({ data }: { data: News[] }) {
  return data.map((news, index) => (
    <SwiperSlide key={index} className="bg-white dark:bg-dark">
      <NewsCard {...news} />
    </SwiperSlide>
  ));
}
