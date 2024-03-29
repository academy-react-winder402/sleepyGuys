import CourseDescriptionBox from "@/components/Templates/Courses/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/Courses/MainCourse/CourseDetails/CourseDetailsBox";
import RelatedCoursesBox from "@/components/Templates/Courses/MainCourse/RelatedCourses/RelatedCoursesBox";
import TeacherDetailsBox from "@/components/Templates/Courses/MainCourse/TeacherDetails/TeacherDetailsBox";
import React from "react";

function CorseInfo() {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-7">
        <CourseDetailsBox />
      </div>
      <div className="col-span-7 grid grid-cols-7 gap-y-6">
        <div className="col-span-5 row-span-2">
          <CourseDescriptionBox />
        </div>
        <div className="col-span-2 row-span-1">
          <TeacherDetailsBox />
        </div>
        <div className="col-span-2 row-span-1">
          <RelatedCoursesBox />
        </div>
      </div>
    </div>
  );
}

export default CorseInfo;
