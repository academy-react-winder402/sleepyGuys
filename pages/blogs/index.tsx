import BlogsBox from "@/components/Templates/Blogs/BlogsBox";
import React from "react";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import { courseSortTypeItems } from "@/constants/courseSortTypeItems";
import courseSortingColItems from "@/constants/courseSortingColItems";
import { useRouter } from "next/router";
import { useGetNewsWithPaginationApi } from "@/hooks/api/useNewsApi";

function Blogs() {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading } = useGetNewsWithPaginationApi({
    RowsOfPage: 9,
    ...query,
  });

  return (
    <>
      <HorizontalFilterBox
        placeholder="جستجو اخبار"
        sortTypeArray={courseSortTypeItems}
        sortingColArray={courseSortingColItems}
      />
      <BlogsBox
        data={data?.news ?? Array.from({ length: 9 })}
        isLoading={isLoading}
        totalCount={data?.totalCount ?? 1}
      />
    </>
  );
}

export default Blogs;
