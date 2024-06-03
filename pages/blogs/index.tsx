import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import React from "react";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import { courseSortTypeItems } from "@/constants/courseSortTypeItems";
import courseSortingColItems from "@/constants/courseSortingColItems";

function Blogs() {
  return (
    <>
      <HorizontalFilterBox
        placeholder="جستجو اخبار"
        sortTypeArray={courseSortTypeItems}
        sortingColArray={courseSortingColItems}
      />
      <BlogsBox />
    </>
  );
}

export default Blogs;
