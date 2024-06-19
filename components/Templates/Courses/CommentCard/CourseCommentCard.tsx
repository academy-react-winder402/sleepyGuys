import React, { useEffect, useState } from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import { Card, CardHeader, Divider, Spinner } from "@nextui-org/react";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import Image from "next/image";
import replyIcon from "@/public/icons/theme/reply.svg";
import outlineLikeIcon from "@/public/icons/outlined/like.svg";
import solidLikeIcon from "@/public/icons/solid/like.svg";
import outlineDislikeIcon from "@/public/icons/outlined/dislike.svg";
import solidDislikeIcon from "@/public/icons/solid/dislike.svg";
import { useRouter } from "next/router";
import {
  useAddCourseCommentDissLikeApi,
  useAddCourseCommentLikeApi,
} from "@/hooks/api/useCoursesApi";
import convertToPersianDigit from "@/utils/convertToPersianDigit";

interface detectReplyToWhichUser {
  detectReplyToWhichUser?: ((userName: string | null) => void) | any;
}

interface refatchFunc {
  refatchFunc?: () => void;
}

type CourseCommentCard = CommentCardType & detectReplyToWhichUser & any;

function CommentCard({
  id,
  courseId,
  parentId,
  title,
  describe,
  author,
  userId,
  insertDate,
  accept,
  acceptReplysCount,
  disslikeCount,
  likeCount,
  currentUserEmotion,
  currentUserLikeId,
  pictureAddress,
  detectReplyToWhichUser,
  refetch,
}: CourseCommentCard) {
  const [isLikeLoding, setIsLikedLoding] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<string>(currentUserEmotion);
  const [DisslikeCount, setDisslikeCount] = useState<number>(disslikeCount);
  const [LikeCount, setLikeCount] = useState<number>(likeCount);

  const plusLike = () => {
    setLikeCount(LikeCount + 1)
  }

  const minusLike = () => {
    setLikeCount(LikeCount - 1)
  }

  const plusDissLike = () => {
    setDisslikeCount(DisslikeCount + 1)
  }

  const minusDissLike = () => {
    setDisslikeCount(DisslikeCount - 1)
  }

  const router = useRouter();
  const { pathname, query } = router;

  const { mutate: addCourseCommentLikeMutate } = useAddCourseCommentLikeApi(
    courseId,
    setIsLikedLoding,
    setIsLike,
    plusLike,
    minusDissLike
  );

  const { mutate: addCourseCommentDissLikeMutate } =
    useAddCourseCommentDissLikeApi(courseId, setIsLikedLoding, setIsLike , minusLike , plusDissLike);

  const commentDate = new Date(insertDate).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const navigateToCommentForm = () => {
    window.scrollTo({
      top: 1750,
      behavior: "smooth",
    });

    detectReplyToWhichUser(author);
    router.push({ pathname, query: { ...query, CommentId: id } }, undefined, {
      shallow: true,
    });
  };

  const likeCommentHandler = () => {
    setIsLikedLoding(true);
    return addCourseCommentLikeMutate(id);
  };

  const dislikeCommentHandler = () => {
    setIsLikedLoding(true);
    return addCourseCommentDissLikeMutate(id);
  };
  return (
    <Card
      className={`${
        parentId
          ? "bg-mainBodyBg dark:bg-dark"
          : "bg-white dark:bg-dark-lighter"
      } rounded-3xl p-4 shadow-none`}
    >
      <CardHeader className="pb-6 px-0 flex justify-between">
        <div className="flex flex-col space-y-4">
          <UserCard
            title={author ?? "بدون نام"}
            description={userId ? "مدرس دوره" : "دانشجو"}
            image={pictureAddress}
            size={35}
          />
          <span className="font-peyda text-sm">{commentDate}</span>
        </div>
        <div className="flex items-start gap-2">
          <button className="flex flex-col items-center gap-1">
            {isLike === "DISSLIKED" ? (
              
              <>
                {!isLikeLoding && (
                  <Image
                    src={solidDislikeIcon}
                    alt=""
                    className="cursor-pointer"
                  />
                )}
                {isLikeLoding && <Spinner />}
              </>
            ) : (
              <>
              {!isLikeLoding && (
                <>
                <Image
                  src={outlineDislikeIcon}
                  alt=""
                  className="cursor-pointer"
                  onClick={dislikeCommentHandler}
                />
                </>
                
              )}
              {isLikeLoding && <Spinner />}
            </>
              
            )}
            <span className="text-xs font-peyda">
              {convertToPersianDigit(DisslikeCount)}
            </span>
          </button>
          <button className="flex flex-col items-center gap-1">
            {isLike === "LIKED" ? (
              <>
              {!isLikeLoding && (
                <Image
                  src={solidLikeIcon}
                  alt=""
                  className="cursor-pointer"
                />
              )}
              {isLikeLoding && <Spinner />}
            </>
            ) : (
              <>
                {!isLikeLoding && (
                  <Image
                    src={outlineLikeIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={likeCommentHandler}
                  />
                )}
                {isLikeLoding && <Spinner />}
              </>
              
            )}
            <span className="text-xs font-peyda">
              {convertToPersianDigit(LikeCount)}
            </span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Image
              src={replyIcon}
              alt=""
              onClick={navigateToCommentForm}
              className="cursor-pointer"
            />
            <span className="text-xs font-peyda">
              {convertToPersianDigit(0)}
            </span>
          </button>
        </div>
      </CardHeader>
      <Divider className="mb-6" />
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
