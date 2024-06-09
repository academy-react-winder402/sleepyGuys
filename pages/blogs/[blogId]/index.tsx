import React from "react";
import { useRouter } from "next/router";
import { useGetNewsCommentApi } from "@/hooks/api/useNewsApi"
import OtherBlogsBox from "@/components/Templates/MainBlog/OtherBlogsBox";
import MainBlogDetailsBox from "@/components/Templates/MainBlog/MainBlogDetailsBox";
import CommentsBox from "@/components/Modules/CommentsBox/CommentsBox";
import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getNewsCommentApi, getNewsDetailsApi, getNewsWithPaginationApi } from "@/services/api/newsApi";

export default function MainBlog() {
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

export const getStaticPaths = (async () => {
  // should updated
  return {
    paths: [
      {
        params: {
          blogId: 'djnfdjfnsjnk'
        }
      }
    ],
    fallback: true
  }
}) satisfies GetStaticPaths

export const getStaticProps: GetStaticProps = (async (context) => {
  const { params } = context

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["newsComments"],
    queryFn: async () => {
      const response = await getNewsCommentApi(params?.blogId)
      return response.data
    }
  })

  await queryClient.prefetchQuery({
    queryKey: ["newsDetails"],
    queryFn: async () => {
      const response = await getNewsDetailsApi(params?.blogId);
      return response.data;
    }
  });

  await queryClient.prefetchQuery({
    queryKey: ["newsWithPagination"],
    queryFn: async () => {
      const response = await getNewsWithPaginationApi(params?.blogId);
      return response.data;
    }
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}) satisfies GetStaticProps