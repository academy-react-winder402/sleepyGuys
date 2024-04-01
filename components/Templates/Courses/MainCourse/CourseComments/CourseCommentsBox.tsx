import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import SubmitCommentForm from "./SubmitComment/SubmitCommentForm";

export default function CourseCommentsBox() {
  return (
    <Card
      className="shadow-2xl shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardHeader>
        <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
          نظرات
        </p>
      </CardHeader>
      <CardBody>
        <SubmitCommentForm />
      </CardBody>
    </Card>
  );
}
