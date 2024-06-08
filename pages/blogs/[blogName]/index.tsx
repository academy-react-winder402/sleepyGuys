import MainBlogBox from "@/components/Templates/MainBlog/MainBlogBox";
import React from "react";
import { useRouter } from "next/router";
import { useGetNewsDetailsApi, useGetNewsWithPaginationApi } from "@/hooks/api/useNewsApi"

function BlogName() {
  const router = useRouter();
  const { query } = router
  const { data : newsDetailData, isLoading : newsDetailIsLoding } = useGetNewsDetailsApi(query.blogName)
  const { data : relatedNews , isLoading : relatedNewsIsLoding } = useGetNewsWithPaginationApi({
    RowsOfPage: 4,
  });
  // console.log(data)
  return (
    <>
      <MainBlogBox isLoding={newsDetailIsLoding} relatedNews={relatedNews?.news} relatedNewsIsLoding={relatedNewsIsLoding} data={newsDetailData?.detailsNewsDto} comments={newsDetailData?.commentDtos} />
    </>
  );
}

export default BlogName;
