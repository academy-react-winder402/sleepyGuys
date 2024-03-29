import UserCard from "@/components/Modules/UserCard/UserCard";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";
import userIcon from "@/public/icons/theme/user.svg";
import logout from "@/public/icons/theme/logout.svg";
import Image from "next/image";
import MainButton from "@/components/Modules/Button/MainButton";

export default function TeacherDetailsBox() {
  return (
    <Card dir="rtl" className="dark:bg-dark-lighter rounded-3xl px-6">
      <CardHeader>
        <UserCard
          title="آرمان غنی زاده"
          description="مدرس دوره"
          image={userIcon}
        />
      </CardHeader>
      <Divider />
      <CardBody dir="rtl" className="text-right px-0 mb-8">
        <p className="text-lightBody dark:text-darkBody text-sm">
          از سال 92 که وارد حوزه نرم افزار و برنامه نویسی شدم... طی 10 سال گذشته
          تجربه کار با زبانها و پلتفرمهای مختلفی رو دارم ولی 4 سال اخیر به شکل
          متمرکز به عنوان فول استک وب دولوپر مشغول به کار بودم و در حال حاضر
          استک اصلیم لاراول و ری اکت هست اما خب میتونم بگم این روز...
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <MainButton
          content="مشاهده همه دوره های استاد"
          variant="light"
          startIcon={<Image src={logout} alt="" />}
        />
      </CardFooter>
    </Card>
  );
}
