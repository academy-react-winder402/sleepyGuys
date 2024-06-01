import React from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import Image from "next/image";
import replyIcon from "@/public/icons/theme/reply.svg";
import { useRouter } from "next/router";

interface detectReplyToWhichUser {
  detectReplyToWhichUser?: (userName: string | null) => void
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
  detectReplyToWhichUser
}: CommentCard) {

  const router = useRouter()
  const { pathname, query } = router
  const navigateToCommentForm = () => {
    window.scrollTo({
      top: 1750,
      behavior: "smooth"
    })

    detectReplyToWhichUser(author)
    router.push({ pathname, query: { ...query, CommentId: id } }, undefined, { shallow: true })
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
        <Image src={replyIcon} alt="" onClick={navigateToCommentForm} className="cursor-pointer" />
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
