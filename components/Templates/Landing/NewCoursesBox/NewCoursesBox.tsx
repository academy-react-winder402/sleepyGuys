import React, { useRef, useState } from "react";

import CourseCardSlider from "@/components/Modules/Slider/CourseCardSlider";

function NewCoursesBox() {
  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap justify-between">
      <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center w-full">
        جدید ترین دوره ها
      </h1>
      <CourseCardSlider />
    </div>
  );
}

export default NewCoursesBox;
