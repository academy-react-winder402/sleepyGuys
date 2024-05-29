import React, { useEffect } from "react";
import CourseVerticalFilterBox from "@/components/Templates/Courses/CourseVerticalFilter/CourseVerticalFilterBox";
import CoursesBox from "@/components/Templates/Courses/CoursesBox";
import HorizontalFilterBox from "@/components/Modules/HorizontalFilter/HorizontalFilterBox";
import courseSortItem from "@/constants/courseSortItem";
import { useGetCoursesApi } from "@/hooks/api/useCoursesApi";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getCoursesApi } from "@/services/api/coursesApi";
import CurvedPagination from "@/components/Modules/Pagination/CurvedPagination";
import { useRouter } from "next/router";

export default function Courses() {
  const router = useRouter();
  const { query } = router;
  const page = query.page || "1"; 
  const getCoursesTop = useGetCoursesApi(query.page);
  const { data, isLoading , refetch } = getCoursesTop;

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  console.log(data)
  
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
            data={data?.data ?? Array.from({ length: 6 })}
            Content={isLoading ? SkeletonCourseCard : CourseCard}
          />
        </div>
        <div className="pt-6">
          <CurvedPagination total={data?.data.totalPages}/>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context : any) {
  const queryClient = new QueryClient();
  const page = context.query.page || "1";

  await queryClient.prefetchQuery({
    queryKey: ["courses", page],
    queryFn: async () => {
      const response = await getCoursesApi(page);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
