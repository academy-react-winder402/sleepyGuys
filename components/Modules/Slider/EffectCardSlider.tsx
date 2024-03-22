import React, { use, useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      dir="ltr"
      effect={"cards"}
      grabCursor={true}
      direction={windowWidth > 1400 ? "horizontal" : "vertical"}
      modules={[EffectCards]}
      className="w-[80%] sm:w-[92%] md:w-[85%] xl:w-[75%] h-[500px] sm:h-[230px] md:h-[280px] lg:h-[320px] dark:bg-opacity-10"
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
