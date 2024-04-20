import { Card, Divider } from "@nextui-org/react";
import React from "react";

export default function BlogsBox() {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-between items-center text-lightBody dark:text-darkBody">
          <p className="font-peyda">خبرنامه سپهر</p>
          <p className="font-peyda">پنجشنبه ۱۹ تیر</p>
        </div>
        <div className="flex items-center">
          <Divider className="w-[35%] md:w-[40%] h-[2px] rounded-md bg-lightTitle dark:bg-darkTitle" />
          <h1 className="w-[30%] md:w-[20%] text-center font-kalamehBlack text-lightTitle dark:text-darkTitle text-2xl md:text-3xl lg:text-4xl">
            روزنامه سپهر
          </h1>
          <Divider className="w-[35%] md:w-[40%] h-[2px] rounded-md bg-lightTitle dark:bg-darkTitle" />
        </div>
      </div>
    </>
  );
}
