import { RelatedCourse } from "@/interfaces/relatedCourses.interface";
import Image from "next/image";
import React from "react";

export default function RelatedCourseItem({ id, title, img }: RelatedCourse) {
  return (
    <div className="border-[.5px] border-LightBody py-2 px-3 flex items-center gap-x-2 rounded-xl text-right cursor-pointer">
      <Image alt="" src={img} width={70} className="rounded-lg" />
      <p className="text-xs text-LightTitle dark:text-black-800">{title}</p>
    </div>
  );
}
