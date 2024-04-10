import React from "react";
import BoxHeader from "@/components/Modules/BoxHeader/BoxHeader";
import CourseHorizontalFilterBox from "@/components/Templates/Courses/CourseHorizontalFilter/CourseHorizontalFilterBox";
import CourseVerticalFilterBox from "@/components/Templates/Courses/CourseVerticalFilter/CourseVerticalFilterBox";
import CoursesBox from "@/components/Templates/Courses/CoursesBox/CoursesBox";

export default function Courses() {
  return (
    <>
      <BoxHeader title="دوره ها" hasLink={false} />
      <div className="space-y-6">
        <CourseHorizontalFilterBox />
        <div className="flex items-start gap-x-6">
          <CourseVerticalFilterBox />
          <CoursesBox />
        </div>
      </div>
    </>
  );
}
