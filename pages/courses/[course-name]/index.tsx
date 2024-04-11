import CourseDescriptionBox from "@/components/Templates/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/MainCourse/CourseDetails/CourseDetailsBox";
import CourseHeadlinesBox from "@/components/Templates/MainCourse/CourseHeadlines/CourseHeadlinesBox";
import RelatedCoursesBox from "@/components/Templates/MainCourse/RelatedCourses/RelatedCoursesBox";
import TeacherDetailsBox from "@/components/Templates/MainCourse/TeacherDetails/TeacherDetailsBox";
import React from "react";
import { getCourseTitles } from "@/mock/getCourseTitles";
import CourseCommentsBox from "@/components/Templates/MainCourse/CourseComments/CourseCommentsBox";
import { getCourseSummary } from "@/mock/getCourseSummary";
import CourseSummaryBox from "@/components/Templates/MainCourse/CourseSummary/CourseSummaryBox";
import { getComments } from "@/mock/getComments";

function CorseInfo() {
  return (
    <>
      <CourseDetailsBox />
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-full lg:w-[70%] gap-y-8 shadow-2xl shadow-shadowColor dark:shadow-none rounded-3xl">
          <CourseSummaryBox data={getCourseSummary()} />
          <CourseDescriptionBox />
          <CourseHeadlinesBox data={getCourseTitles()} />
          <CourseCommentsBox data={getComments()} />
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
