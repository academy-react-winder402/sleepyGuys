import CourseDescriptionBox from "@/components/Templates/Courses/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/Courses/MainCourse/CourseDetails/CourseDetailsBox";
import CourseHeadlinesBox from "@/components/Templates/Courses/MainCourse/CourseHeadlines/CourseHeadlinesBox";
import RelatedCoursesBox from "@/components/Templates/Courses/MainCourse/RelatedCourses/RelatedCoursesBox";
import TeacherDetailsBox from "@/components/Templates/Courses/MainCourse/TeacherDetails/TeacherDetailsBox";
import React from "react";
import { getCourseTitles } from "@/mock/getCourseTitles";
import CourseCommentsBox from "@/components/Templates/Courses/MainCourse/CourseComments/CourseCommentsBox";

function CorseInfo() {
  return (
    <>
      <CourseDetailsBox />
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-full lg:w-[70%] gap-y-8 shadow-2xl shadow-shadowColor dark:shadow-none rounded-3xl">
          <CourseDescriptionBox />
          <CourseHeadlinesBox data={getCourseTitles()} />
          <CourseCommentsBox />
        </div>
        <div className="hidden lg:flex flex-col gap-y-8 w-1/3">
          <TeacherDetailsBox />
          <RelatedCoursesBox />
        </div>
      </div>
    </>
  );
}

export default CorseInfo;
