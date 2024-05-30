import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import SubmitCommentForm from "../../../Modules/SubmitComment/SubmitCommentForm";
import CommentCard from "@/components/Modules/CommentCard/CommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddCommentApi } from "@/hooks/api/useCoursesApi";
import { useRouter } from "next/router";

export default function CourseCommentsBox({
  data,
  isCommentsLoading,
}: {
  data: CommentCardType[];
  isCommentsLoading:boolean
}) {
  const addComment = useAddCommentApi()
  const router = useRouter()
  console.log(router)

  const submitFormHandler: SubmitHandler<addCommentFormType> = (data1) => {
    // console.log(data1 , data[0].courseId)
    addComment.mutate({
      ...data1,
      CourseId: router.query.courseId,
    })
  };
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
        <SubmitCommentForm  submitFormHandler={submitFormHandler}/>
        <div className="flex flex-col gap-5 text-right mt-8">
          {/* <CommentCard
            name="آرمان غنی زاده"
            description="طبق روند تدریس شده در این دوره ابتدا Page Router و سپس App Router رو یاد بگیرین ❤️"
            role="مدرس دوره"
            image={userIcon}
            size={35}
          /> */}
          { !isCommentsLoading && data?.map((comment, index) => (
            <CommentCard {...comment} key={index} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
