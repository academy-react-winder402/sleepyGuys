import React from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import { Card, CardHeader, Divider } from "@nextui-org/react";
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
import { newsCommentProps } from "@/interfaces/newsCommnet.interface";
import { useNewsCommentLikeApi } from "@/hooks/api/useNewsApi";

interface detectReplyToWhichUser {
  detectReplyToWhichUser?: ((userName: string | null) => void) | any;
}

type NewsCommentCard = newsCommentProps & detectReplyToWhichUser;

function CommentCard({
  id,
  autor,
  describe,
  parentId,
  pictureAddress,
  title,
  detectReplyToWhichUser,
  currentUserIsDissLike,
  currentUserIsLike,
  currentUserLikeId,
  likeCount,
  dissLikeCount,
  currentUserEmotion,
  newsId,
  inserDate,
}: NewsCommentCard) {
  const router = useRouter();
  const { pathname, query } = router;

  const { mutate: newsCommentLikeMutate } = useNewsCommentLikeApi(newsId);

  const commentDate = new Date(inserDate).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const navigateToCommentForm = () => {
    window.scrollTo({
      top: 1250,
      behavior: "smooth",
    });

    detectReplyToWhichUser(autor);
    router.push({ pathname, query: { ...query, BlogId: id } }, undefined, {
      shallow: true,
    });
  };

  const likeCommentHandler = () => {
    return newsCommentLikeMutate({ CommentId: id, LikeType: true });
  };

  const dislikeCommentHandler = () => {
    return newsCommentLikeMutate({ CommentId: id, LikeType: false });
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
            title={autor ?? "بدون نام"}
            description={"دانشجو"}
            image={pictureAddress}
            size={35}
          />
          <span className="font-peyda text-sm">{commentDate}</span>
        </div>
        <div className="flex items-start gap-2">
          <button className="flex flex-col items-center gap-1">
            {!currentUserIsDissLike === false ? (
              <Image src={solidDislikeIcon} alt="" className="cursor-pointer" />
            ) : (
              <Image
                src={outlineDislikeIcon}
                alt=""
                className="cursor-pointer"
                onClick={dislikeCommentHandler}
              />
            )}
            <span className="text-xs font-peyda">
              {convertToPersianDigit(dissLikeCount)}
            </span>
          </button>
          <button className="flex flex-col items-center gap-1">
            {currentUserIsLike === true ? (
              <Image src={solidLikeIcon} alt="" className="cursor-pointer" />
            ) : (
              <Image
                src={outlineLikeIcon}
                alt=""
                className="cursor-pointer"
                onClick={likeCommentHandler}
              />
            )}
            <span className="text-xs font-peyda">
              {convertToPersianDigit(likeCount)}
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
