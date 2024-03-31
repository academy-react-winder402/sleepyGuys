import CourseDescriptionBox from "@/components/Templates/Courses/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/Courses/MainCourse/CourseDetails/CourseDetailsBox";
import RelatedCoursesBox from "@/components/Templates/Courses/MainCourse/RelatedCourses/RelatedCoursesBox";
import TeacherDetailsBox from "@/components/Templates/Courses/MainCourse/TeacherDetails/TeacherDetailsBox";
import React from "react";

function CorseInfo() {
  return (
    <>
      <CourseDetailsBox />
      <div className="flex items-start gap-x-8">
        <CourseDescriptionBox />
        <div className="hidden lg:flex flex-col gap-y-8 w-1/3">
          <TeacherDetailsBox />
          <RelatedCoursesBox />
        </div>
      </div>
    </>
  );
}

export default CorseInfo;
