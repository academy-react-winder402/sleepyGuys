import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import React from "react";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import courseSortingColItems from "@/constants/courseSortingColItems";
import { sortTypeItems } from "@/constants/sortTypeItems";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getNewsWithPaginationApi } from "@/services/api/newsApi";
import { GetServerSideProps } from "next";

export default function Blogs() {
  return (
    <>
      <HorizontalFilterBox
        placeholder="جستجو اخبار"
        sortTypeArray={sortTypeItems}
        sortingColArray={courseSortingColItems}
      />
      <BlogsBox />
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const queryClient = new QueryClient();
  const { query } = context

  await queryClient.prefetchQuery({
    queryKey: ["newsWithPagination", query],
    queryFn: async () => {
      const response = await getNewsWithPaginationApi(query);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps