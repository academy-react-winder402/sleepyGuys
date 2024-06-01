import React from "react";
import CourseVerticalFilterBox from "@/components/Templates/Courses/CourseVerticalFilter/CourseVerticalFilterBox";
import CoursesBox from "@/components/Templates/Courses/CoursesBox";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import courseSortItem from "@/constants/courseSortItem";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import CurvedPagination from "@/components/Modules/Pagination/CurvedPagination";
import { useRouter } from "next/router";
import { useGetCoursesWithPaginationApi } from "@/hooks/api/useCoursesApi";
import { getCoursesWithPaginationApi } from "@/services/api/coursesApi";
import { GetServerSideProps } from "next";

export default function Courses() {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading } = useGetCoursesWithPaginationApi({ RowsOfPage: 9, ...query });
  return (
    <>
      <h2 className="font-peyda text-[20px] lg:text-[30px] text-primary dark:text-primary-lighter mt-12 mb-6">
        دوره ها
      </h2>
      <div className="space-y-6">
        <HorizontalFilterBox
          placeholder="جستجو دوره"
          sortItemsArray={courseSortItem}
        />
        <div className="flex flex-col md:flex-row md:gap-x-6">
          <CourseVerticalFilterBox />
          <CoursesBox
            data={data?.courseFilterDtos ?? Array.from({ length: 6 })}
            Content={isLoading ? SkeletonCourseCard : CourseCard}
          />
        </div>
        <div className="pt-6">
          <CurvedPagination total={data?.totalCount ?? 1} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const queryClient = new QueryClient();
  const { query } = context

  await queryClient.prefetchQuery({
    queryKey: ["coursesWithPagination", query],
    queryFn: async () => {
      const response = await getCoursesWithPaginationApi(query);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps