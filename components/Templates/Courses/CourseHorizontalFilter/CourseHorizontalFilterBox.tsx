import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import Image from "next/image";
import React from "react";
import searchIcon from "@/public/icons/filter/search.svg";
import { Button, Divider, Dropdown } from "@nextui-org/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { searchCourse } from "@/interfaces/searchCourse.interface";
import MainButton from "@/components/Modules/Button/MainButton";
import MaineDropDown from "@/components/Modules/MainDropdown/MainDropdown";
import { getCoursesSortItem } from "@/mock/getCoursesSortItem";
import courseSortItem from "@/constants/courseSortItem";
import { useRouter } from "next/router";

export default function CourseHorizontalFilterBox() {
  const { register, handleSubmit } = useForm<searchCourse>();
  const router = useRouter();

  const { asPath } = router;
  console.log(router)

  const submitFormHandler: SubmitHandler<searchCourse> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white dark:bg-dark-lighter flex items-center gap-2 flex-row rounded-xl p-2">
      <form
        className="relative w-[50%] sm:w-[35%] lg:w-[25%]"
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
          className="absolute left-0 top-3 bg-transparent min-w-unit-0"
          content={
            <Image alt="" src={searchIcon} className="cursor-pointer m-0" />
          }
          type="submit"
        />
      </form>
      <div className="hidden sm:flex items-center w-full">
        <ul className="items-center gap-x-6 font-peyda text-[13px] md:text-[15px] flex">
          <li className="w-3 h-5 flex justify-center items-center relative">
            <Divider className="w-8 md:w-12 absolute top-[50%] md:-left-[200%] lg:-left-[150%] rotate-90" />
          </li>
          <li>
            <p className="font-peyda">مرتب سازی :</p>
          </li>
          {courseSortItem.map((item) => {
            const isActive = asPath === item.href;
            console.log(asPath , item.href)
            return (
              <li
                key={item.id}
                className={`flex items-center justify-center flex-col xs:gap-1 ${
                  isActive ? " text-white" : "text-gray-lighter"
                }`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm:hidden w-[50%] flex gap-2 items-center">
        <Divider className="w-8 md:w-12 rotate-90 -mr-4" />
        <MaineDropDown data={getCoursesSortItem()} />
      </div>
    </div>
  );
}
