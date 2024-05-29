import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import NavigationSlider from "@/components/Modules/Slider/NavigationSlider";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { useGetCoursesTopApi } from "@/hooks/api/useCoursesApi";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";

function LastCoursesBox() {
  const getCoursesTop = useGetCoursesTopApi(7)
  const { data, isLoading } = getCoursesTop

  return (
    <div className="lg:mt-36 mt-24 flex flex-wrap">
      <BoxHeader
        title="آخرین دوره ها"
        hasLink={true}
        linkTitle="مشاهده همه"
        route="/courses"
      />
      <NavigationSlider data={data ?? Array.from({ length: 6 })} Content={isLoading ? SkeletonCourseCard : CourseCard} />
    </div>
  );
}

export default LastCoursesBox;