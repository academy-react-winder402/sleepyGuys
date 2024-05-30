import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import SubmitCommentForm from "../../../Modules/SubmitComment/SubmitCommentForm";
import CommentCard from "@/components/Modules/CommentCard/CommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";

export default function CourseCommentsBox({
  data,
  isCommentsLoading,
}: {
  data: CommentCardType[];
  isCommentsLoading: boolean
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
          {!isCommentsLoading && data?.map((comment, index) => (
            <CommentCard {...comment} key={index} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
