import CourseCardSlider from "@/components/Modules/Slider/CourseCardSlider";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

function NewCoursesBox() {
  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap">
      <h1 className="font-peyda text-[30px] md:text-[35px] text-primary dark:text-primary-lighter lg:mb-10 mb-8 text-center w-full">
        جدید ترین دوره ها
      </h1>
      <CourseCardSlider />
    </div>
  );
}

export default NewCoursesBox;
