import { RelatedCourse } from "@/interfaces/relatedCourses.interface";
import Image from "next/image";
import React from "react";

export default function RelatedCourseItem({ id, title, img }: RelatedCourse) {
  return (
    <div className="py-4 pl-3 bg-LightCardBg dark:bg-DarkCardBg flex items-center rounded-xl text-right cursor-pointer">
      <Image alt="" src={img}  className="rounded-lg translate-x-5 w-20 lgb:w-28" />
      <p className="text-xs text-LightTitle dark:text-black-800 leading-5">{title}</p>
    </div>
  );
}
