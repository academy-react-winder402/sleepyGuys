import CourseDescriptionBox from "@/components/Templates/Courses/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/Courses/MainCourse/CourseDetails/CourseDetailsBox";
import RelatedCoursesBox from "@/components/Templates/Courses/MainCourse/RelatedCourses/RelatedCoursesBox";
import TeacherDetailsBox from "@/components/Templates/Courses/MainCourse/TeacherDetails/TeacherDetailsBox";
import React from "react";

function CorseInfo() {
  return (
    <>
      <CourseDetailsBox />
      <div className="flex items-start">
        <CourseDescriptionBox />
        <div className="flex flex-col gap-y-4 w-[30%]">
          <TeacherDetailsBox />
          <RelatedCoursesBox />
        </div>
      </div>
    </>
  );
}

export default CorseInfo;
