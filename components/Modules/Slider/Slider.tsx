import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { getNews } from "@/mock/getNews";
import NewsCard from "./Contents/NewsCard";
import Link from "next/link";

export default function Slider() {
  return (
    <Swiper
      dir="ltr"
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="w-[90%] sm:w-[92%] md:w-[85%] xl:w-[75%] sm:h-[230px] md:h-[280px] lg:h-[320px]"
    >
      {getNews().map((news , index) => (
        <SwiperSlide  key={index} className="bg-white-100">
          <NewsCard {...news} />
        </SwiperSlide>
      ))}
      <Link href={"/blogs"} className="w-full block text-left -mt-8 text-black-400">
      <span className="text-black-700">------</span> {" "}{" "}مشاهده همه اخبار
      </Link>
    </Swiper>
  );
}
