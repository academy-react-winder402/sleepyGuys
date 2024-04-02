import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import SubmitCommentForm from "./SubmitComment/SubmitCommentForm";
import CommentCard from "@/components/Modules/CommentCard/CommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";

export default function CourseCommentsBox({
  data,
}: {
  data: CommentCardType[];
}) {
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
        <div className="flex flex-col gap-5 text-right mt-8">
          {/* <CommentCard
            name="آرمان غنی زاده"
            description="طبق روند تدریس شده در این دوره ابتدا Page Router و سپس App Router رو یاد بگیرین ❤️"
            role="مدرس دوره"
            image={userIcon}
            size={35}
          /> */}
          {data.map((comment, index) => (
            <CommentCard {...comment} key={index} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
