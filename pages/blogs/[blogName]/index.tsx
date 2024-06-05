import MainBlogBox from "@/components/Templates/MainBlog/MainBlogBox";
import React from "react";
import { useRouter } from "next/router";
import { useGetCourseDetailsApi } from "@/hooks/api/useNewsApi"

function BlogName() {
  const router = useRouter();
  const { query } = router
  const { data, isLoading } = useGetCourseDetailsApi(query.blogName)
  return (
    <>
      <MainBlogBox isLoding={isLoading} data={data?.detailsNewsDto} comments={data?.commentDtos} />
    </>
  );
}

export default BlogName;
