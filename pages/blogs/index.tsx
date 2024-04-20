import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import CourseHorizontalFilterBox from "@/components/Templates/Courses/CourseHorizontalFilter/CourseHorizontalFilterBox";
import React from "react";

function Blogs() {
  return (
    <>
      <CourseHorizontalFilterBox />
      <BlogsBox />
    </>
  );
}

export default Blogs;
