import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import Image from "next/image";
import React from "react";
import searchIcon from "@/public/icons/filter/search.svg";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { searchCourse } from "@/interfaces/searchCourse.interface";
import MainButton from "@/components/Modules/Button/MainButton";

export default function CourseHorizontalFilterBox() {
  const { register, handleSubmit } = useForm<searchCourse>();

  const submitFormHandler: SubmitHandler<searchCourse> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white dark:bg-dark-lighter flex items-center gap-x-16 md:gap-x-2 gap-y-2 pb-4 md:pb-0 flex-col md:flex-row rounded-xl">
      <form
        className="w-full md:w-[30%] lg:w-[25%] xl:w-[20%] relative"
        onSubmit={handleSubmit(submitFormHandler)}
      >
        <PrimaryInput
          placeholder="جستجو دوره"
          variant="faded"
          className="text-2xl font-peyda w-full"
          hasBorder={false}
          register={{
            ...register("title", {
              required: true,
            }),
          }}
        />
        <MainButton
          className="absolute left-0 top-3 bg-transparent"
          content={<Image alt="" src={searchIcon} className="cursor-pointer" />}
          type="submit"
        />
      </form>
      <div className="flex items-center w-full justify-center md:justify-normal px-3 md:px-0">
        <p className="font-peyda">مرتب سازی</p>
        <Divider className="w-8 md:w-12 rotate-90" />
        <ul className="flex items-center gap-x-6 font-peyda">
          <li className="text-lightBody">
            <Link href={"#"}>جدیدترین</Link>
          </li>
          <li className="text-lightBody">
            <Link href={"#"}>پرفروش ترین</Link>
          </li>
          <li className="text-lightBody">
            <Link href={"#"}>گران ترین</Link>
          </li>
          <li className="text-lightBody">
            <Link href={"#"}>ارزان ترین</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
