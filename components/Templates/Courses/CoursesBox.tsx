import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { Course } from "@/interfaces/course.interface";
import React from "react";

export default function CoursesBox({
  data,
  Content,
}: {
  data: Course[];
  Content: React.ElementType;
}) {
  return (
    <div className="w-full md:w-[70%] lg:w-[78%] md:flex rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lgb:grid-cols-3 gap-4 lg:gap-6">
        {data?.map((item, index) => (
          <div key={index}>
            <Content {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
