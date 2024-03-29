import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import RelatedCourseItem from "./RelatedCourseItem";
import { getRelatedCourses } from "@/mock/getRelatedCourses";

export default function RelatedCoursesBox() {
  return (
    <Card dir="rtl" className="dark:bg-dark-lighter rounded-3xl px-6 py-4">
      <CardHeader>
        <p className="text-2xl font-kalamehBlack text-MainPrimary dark:text-MainPrimary-lighter">
          دوره های مشابه
        </p>
      </CardHeader>
      <CardBody className="gap-y-4">
        {getRelatedCourses().map((course, index: number) => (
          <RelatedCourseItem {...course} key={index} />
        ))}
      </CardBody>
    </Card>
  );
}
