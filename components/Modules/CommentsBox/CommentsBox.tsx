import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { useRef } from "react";
import SubmitCommentForm from "../SubmitComment/SubmitCommentForm";
import CommentCard from "@/components/Modules/CommentCard/CommentCard";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import SkeletonCommentCard from "@/components/Modules/CommentCard/SkeletonCommentCard";
import { useRouter } from "next/router";
import { isUserAuthenticated } from "@/utils/isUserAuthenticated";
import MainButton from "@/components/Modules/Button/MainButton";
import { newsCommentProps } from "@/interfaces/newsCommnet.interface";

export default function CommentsBox({
  data,
  isCommentsLoading,
}: {
  data: CommentCardType[] | newsCommentProps[];
  isCommentsLoading: boolean
}) {

  const router = useRouter()
  const { asPath, query } = router

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
        {isUserAuthenticated() ? <SubmitCommentForm /> :
          <div className="text-right flex items-center gap-2">
            <p className="font-peyda text-lg">برای ثبت نظر باید وارد حسابت بشی</p>
            <MainButton
              content="ورود به حساب"
              className="bg-primary dark:bg-primary-darker text-btnText rounded-lg font-peyda"
              onClick={() => router.push({
                pathname: "/login",
                query: {
                  callbackUrl: asPath
                }
              })} />
          </div>}
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
          {data?.length === 0 && <p className="font-kalamehBlack text-2xl text-secondary">تا الان هیچ نظری برای این دوره ثبت نشده است!</p>}
        </div>
      </CardBody>
    </Card>
  );
}
