import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import BlogHorizontalFilterBox from "@/components/Templates/Blogs/BlogHorizontalFilter/BlogHorizontalFilterBox";
import React from "react";

function Blogs() {
  return (
    <>
      <BlogHorizontalFilterBox />
      <BlogsBox />
    </>
  );
}

export default Blogs;
