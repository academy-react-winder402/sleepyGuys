import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import TeachersBox from "@/components/Templates/Teachers/TeachersBox";
import { getTeachers } from "@/mock/getTeachers";
import React from "react";

function Teachears() {
  return (
    <>
      <MainBreadcrumb />
      <HorizontalFilterBox
        sortItemsArray={[]}
        placeholder="جستجو بر اساس نام استاد"
      />
      <TeachersBox data={getTeachers()} />
    </>
  );
}

export default Teachears;
