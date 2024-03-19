import React from "react";
import CourseCardSlider from "@/components/Modules/Slider/CourseCardSlider";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

function NewCoursesBox() {
  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap lg:gap-y-10 gap-y-8">
      <div className="flex-grow items-center grid grid-cols-3 justify-between">
        <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter col-start-2 col-span-1 mx-auto">
          جدید ترین دوره ها
        </h1>
        <Link
          href={"#"}
          className="col-start-3 col-span-1 ms-auto flex items-center gap-x-2"
        >
          <span>مشاهده همه</span>
          <Divider className="w-[30px] bg-black-600" />
        </Link>
      </div>
      <CourseCardSlider />
    </div>
  );
}

export default NewCoursesBox;
