import React from "react";
import { useRouter } from "next/router";
import { useGetNewsCommentApi } from "@/hooks/api/useNewsApi"
import OtherBlogsBox from "@/components/Templates/MainBlog/OtherBlogsBox";
import MainBlogDetailsBox from "@/components/Templates/MainBlog/MainBlogDetailsBox";
import CommentsBox from "@/components/Modules/CommentsBox/CommentsBox";

function MainBlog() {
  const router = useRouter();
  const { query } = router

  const { data: newsDetailComments, isLoading: newsDetailCommentsIsLoding } = useGetNewsCommentApi(query?.blogId)
  return (
    <>
      <MainBlogDetailsBox />
      <OtherBlogsBox />
      <CommentsBox data={newsDetailComments} isCommentsLoading={newsDetailCommentsIsLoding} />
    </>
  );
}

export default MainBlog;
