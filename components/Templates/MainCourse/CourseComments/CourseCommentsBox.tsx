import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useRef } from "react";
import SubmitCommentForm from "../../../Modules/SubmitComment/SubmitCommentForm";
import CommentCard from "@/components/Modules/CommentCard/CommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import SkeletonCommentCard from "@/components/Modules/CommentCard/SkeletonCommentCard";
import { useRouter } from "next/router";

export default function CourseCommentsBox({
  data,
  isCommentsLoading,
}: {
  data: CommentCardType[];
  isCommentsLoading: boolean
}) {

  const router = useRouter()
  const { query } = router

  const replyCommentName = useRef<string | null>()

  const detectReplyToWhichUser = (userName: string | null) => {
    replyCommentName.current = userName
  }
  return (
    <Card
      className="shadow-2xl shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
      dir="rtl"
    >
      <CardHeader className="flex flex-col items-start">
        <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
          ثبت نظر جدید
        </p>
        {query.CommentId && <p className="font-kalamehBlack text-xl text-secondary">
          در پاسخ به {replyCommentName.current}
        </p>}
      </CardHeader>
      <CardBody>
        <SubmitCommentForm />
        <CardHeader>
          <p className="font-kalamehBlack text-3xl text-primary dark:text-primary-lighter">
            نظرات
          </p>
        </CardHeader>
        <div className="flex flex-col gap-5 text-right mt-4">
          {isCommentsLoading ? Array.from({ length: 6 }, (_, index) => (
            <SkeletonCommentCard key={index} />
          )) : data?.map((comment, index) => (
            <CommentCard {...comment} key={index} detectReplyToWhichUser={detectReplyToWhichUser} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
