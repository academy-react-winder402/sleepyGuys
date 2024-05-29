import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { getCourses } from "@/mock/getCourses";
import React from "react";

export default function CoursesBox() {
  return (
    <div className="w-full md:w-[70%] lg:w-[78%] md:flex rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lgb:grid-cols-3 gap-4 lg:gap-6">
        {getCourses().slice(0, 6).map((item, index) => (
          <div key={index}>
            <CourseCard courseId={""} tumbImageAddress={""} describe={""} cost={""} teacherName={""} courseRate={0} courseReserveId={""} currentUserRateNumber={0} currentUserSetRate={false} dissLikeCount={0} likeCount={0} isCourseReseve={false} isUserFavorite={false} lastUpdate={""} levelName={""} statusName={""} typeName={""} userFavoriteId={""} userIsDissLiked={false} userIsLiked={false} userLikeId={""} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
