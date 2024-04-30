import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import TeachersBox from "@/components/Templates/Teachers/TeachersBox";
import React from "react";

function Teachears() {
  return (
    <>
      <MainBreadcrumb
        items={[
          { title: "خانه", route: "/" },
          { title: "صفحه اساتید", route: "teachers" },
        ]}
      />
      {/* <HorizontalFilterBox
        sortItemsArray={[]}
        placeholder="جستجو بر اساس نام استاد"
      /> */}
      <TeachersBox/>
    </>
  );
}

export default Teachears;
