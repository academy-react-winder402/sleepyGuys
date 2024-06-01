import React from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import Image from "next/image";
import replyIcon from "@/public/icons/theme/reply.svg";
import outlineLikeIcon from "@/public/icons/outlined/like.svg";
import solidLikeIcon from "@/public/icons/solid/like.svg"
import outlineDislikeIcon from "@/public/icons/outlined/dislike.svg";
import solidDislikeIcon from "@/public/icons/solid/dislike.svg";
import { useRouter } from "next/router";
import { useAddCourseCommentDissLikeApi, useAddCourseCommentLikeApi } from "@/hooks/api/useCoursesApi";
import convertToPersianDigit from "@/utils/convertToPersianDigit";

interface detectReplyToWhichUser {
  detectReplyToWhichUser?: ((userName: string | null) => void) | any
}

type CommentCard = CommentCardType & detectReplyToWhichUser

function CommentCard({
  id,
  author,
  describe,
  parentId,
  pictureAddress,
  title,
  userId,
  detectReplyToWhichUser,
  likeCount,
  disslikeCount,
  currentUserEmotion
}: CommentCard) {
  const router = useRouter()
  const { pathname, query } = router

  const { mutate: addCourseCommentLikeMutate } = useAddCourseCommentLikeApi()

  const { mutate: addCourseCommentDissLikeMutate } = useAddCourseCommentDissLikeApi()

  const navigateToCommentForm = () => {
    window.scrollTo({
      top: 1750,
      behavior: "smooth"
    })

    detectReplyToWhichUser(author)
    router.push({ pathname, query: { ...query, CommentId: id } }, undefined, { shallow: true })
  }

  const likeCommentHandler = () => {
    addCourseCommentLikeMutate(id)
  }

  const dislikeCommentHandler = () => {
    addCourseCommentDissLikeMutate(id)
  }
  return (
    <Card
      className={`${parentId
        ? "bg-mainBodyBg dark:bg-dark"
        : "bg-white dark:bg-dark-lighter"
        } rounded-3xl p-4 shadow-none`}
    >
      <CardHeader className="pb-6 px-0 flex justify-between">
        <UserCard
          title={author}
          description={userId ? "مدرس دوره" : "دانشجو"}
          image={pictureAddress}
          size={35}
        />
        <div className="flex items-start gap-2">
          <button className="flex flex-col items-center gap-1">{currentUserEmotion === "DISSLIKED" ? <Image src={solidDislikeIcon} alt="" className="cursor-pointer" /> : <Image src={outlineDislikeIcon} alt="" className="cursor-pointer" onClick={dislikeCommentHandler} />}<span className="text-xs font-peyda">{convertToPersianDigit(disslikeCount)}</span></button>
          <button className="flex flex-col items-center gap-1">{currentUserEmotion === "LIKED" ? <Image src={solidLikeIcon} alt="" className="cursor-pointer" /> : <Image src={outlineLikeIcon} alt="" className="cursor-pointer" onClick={likeCommentHandler} />}<span className="text-xs font-peyda">{convertToPersianDigit(likeCount)}</span></button>
          <Image src={replyIcon} alt="" onClick={navigateToCommentForm} className="cursor-pointer" />
        </div>
      </CardHeader>
      <Divider className="mt-3 mb-6" />
      <p className="text-lightBody dark:text-darkBody text-sm lgb:text-[14px] leading-7">
        {title}
        {describe}
      </p>
      {/* <div className="flex flex-col gap-y-4 mt-6">
        {replies.map((reply, index) => (
          <CommentCard {...reply} key={index} />
        ))}
      </div> */}
    </Card>
  );
}

export default CommentCard;
