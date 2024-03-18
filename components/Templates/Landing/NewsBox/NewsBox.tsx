import Slider from "@/components/Modules/Slider/Slider";
import React from "react";

export default function NewsBox() {
  return (
    <div className="lg:mt-36 mt-24">
      <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center">
        آخرین اخبار
      </h1>
      <Slider />
    </div>
  );
}
