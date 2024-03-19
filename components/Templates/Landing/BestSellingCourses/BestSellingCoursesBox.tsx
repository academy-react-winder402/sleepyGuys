import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
import NavigationSlider from "@/components/Modules/Slider/NavigationSlider";
import { getCourses } from "@/mock/getCourses";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";

export default function BestSellingCoursesBox() {
  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap">
      <div className="flex-grow items-center grid grid-cols-3 justify-between">
        <div className="col-start-2 col-span-1 mx-auto">
          <BoxHeader title="پرفروش ترین دوره ها" />
        </div>
        <Link
          href={"#"}
          className="col-start-3 col-span-1 ms-auto flex items-center gap-x-2 lg:mb-10 mb-8"
        >
          <span>مشاهده همه</span>
          <Divider className="w-[30px] bg-black-600" />
        </Link>
      </div>
      <NavigationSlider data={getCourses()} Content={CourseCard} />
    </div>
  );
}
