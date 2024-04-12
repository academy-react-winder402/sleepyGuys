import React from "react";
import UserCard from "@/components/Modules/UserCard/UserCard";
import { Card, CardHeader, Divider } from "@nextui-org/react";
import { CommentCard as CommentCardType } from "@/interfaces/commentCard.interface";
import Link from "next/link";
import Image from "next/image";
import replyIcon from "@/public/icons/theme/reply.svg";

function CommentCard({
  fullName,
  isTeacher,
  description,
  img,
  isReplied,
  replies,
}: CommentCardType) {
  return (
    <Card
      className={`${
        !isReplied
          ? "bg-mainBodyBg dark:bg-dark"
          : "bg-white dark:bg-dark-lighter"
      } rounded-3xl p-4 shadow-none`}
    >
      <CardHeader className="pb-6 px-0 flex justify-between">
        <UserCard
          title={fullName}
          description={isTeacher ? "مدرس دوره" : "دانشجو"}
          image={img}
          size={35}
        />
        {!isReplied && (
          <Link href={"#comment-form"} className="p-3 rounded-full">
            <Image src={replyIcon} alt="" />
          </Link>
        )}
      </CardHeader>
      <Divider className="mt-3 mb-6" />
      <p className="text-lightBody dark:text-darkBody text-sm lgb:text-[14px] leading-7">
        {description}
      </p>
      <div className="flex flex-col gap-y-4 mt-6">
        {replies.map((reply, index) => (
          <CommentCard {...reply} key={index} />
        ))}
      </div>
    </Card>
  );
}

export default CommentCard;
