import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Link from "next/link";

export default function EffectCardSlider({
  href,
  title,
  data,
  Content,
}: {
  href: string;
  title: string;
  data: any[];
  Content: React.ElementType;
}) {
  return (
    <Swiper
      dir="ltr"
      effect={"cards"}
      grabCursor={true}
      direction="vertical"
      modules={[EffectCards]}
      className="w-[90%] sm:w-[92%] md:w-[85%] xl:w-[75%] h-[500px] sm:h-[230px] md:h-[280px] lg:h-[320px] dark:bg-opacity-10"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="bg-white-100 dark:bg-dark">
          <Content {...item} />
        </SwiperSlide>
      ))}
      {title && (
        <Link
          href={href}
          className="w-full block text-left -mt-8 text-black-400 dark:text-white-300"
        >
          <span className="text-black-700">------</span> {title}
        </Link>
      )}
    </Swiper>
  );
}
