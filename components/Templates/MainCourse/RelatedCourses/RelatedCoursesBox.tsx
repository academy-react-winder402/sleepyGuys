import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import RelatedCourseItem from "./RelatedCourseItem";
import { getRelatedCourses } from "@/mock/getRelatedCourses";

export default function RelatedCoursesBox() {
  return (
    <Card
      dir="rtl"
      className="dark:bg-dark-lighter rounded-3xl px-6 py-4 shadow-2xl shadow-shadowColor dark:shadow-none"
    >
      <CardHeader>
        <p className="text-2xl font-kalamehBlack text-primary dark:text-primary-lighter">
          دوره های مشابه
        </p>
      </CardHeader>
      <CardBody className="gap-y-4 overflow-visible pr-8">
        {getRelatedCourses().map((course, index: number) => (
          <RelatedCourseItem {...course} key={index} />
        ))}
      </CardBody>
    </Card>
  );
}
