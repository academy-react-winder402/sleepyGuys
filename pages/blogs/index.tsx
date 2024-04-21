import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import React from "react";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import blogSortItem from "@/constants/blogSortItem";

function Blogs() {
  return (
    <>
      <HorizontalFilterBox
        placeholder="جستجو اخبار"
        sortItemsArray={blogSortItem}
      />
      <BlogsBox />
    </>
  );
}

export default Blogs;
