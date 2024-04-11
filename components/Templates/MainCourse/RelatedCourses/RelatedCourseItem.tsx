import { RelatedCourse } from "@/interfaces/relatedCourses.interface";
import Image from "next/image";
import React from "react";

export default function RelatedCourseItem({ id, title, img }: RelatedCourse) {
  return (
    <div className="py-4 pl-3 bg-mainBodyBg dark:bg-dark flex items-center rounded-xl text-right cursor-pointer">
      <Image
        alt=""
        src={img}
        className="rounded-lg translate-x-5 w-20 lgb:w-28"
      />
      <p className="text-xs text-lightTitle dark:text-darkTitle">{title}</p>
    </div>
  );
}
