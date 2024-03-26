import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import NavigationSlider from "@/components/Modules/Slider/NavigationSlider";
import { getCourses } from "@/mock/getCourses";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";

export default function BestSellingCoursesBox() {
  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap">
      <BoxHeader
        title="پرفروش ترین دوره ها"
        hasLink={true}
        linkTitle="مشاهده همه"
        route="/courses"
      />
      <NavigationSlider data={getCourses()} Content={CourseCard} />
    </div>
  );
}
