import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import SubmitCommentForm from "@/components/Modules/SubmitComment/SubmitCommentForm";
import NewsCommentCard from "@/components/Templates/Blogs/CommentCard/NewsCommentCard";
import SkeletonNewsCommentCard from "@/components/Templates/Blogs/CommentCard/SkeletonNewsCommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";

export default function BlogComments({
  data,
  newsDetailCommentsIsLoding
}: any) {
  return (
    <Card
      className="shadow-2xl mt-20 shadow-shadowColor dark:shadow-none p-6 dark:bg-dark-lighter"
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
          { !newsDetailCommentsIsLoding && data?.map((comment : any) => (
            <NewsCommentCard {...comment} key={comment.id} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

