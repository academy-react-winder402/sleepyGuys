import CourseCard from "@/components/Modules/CourseCard/CourseCard";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";
import CurvedPagination from "@/components/Modules/Pagination/CurvedPagination";
import { useGetMyCoursesWithPaginationApi } from "@/hooks/api/usePanelApi";
import { Course } from "@/interfaces/course.interface";
import { useRouter } from "next/router";
import React from "react";

function Index() {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading } = useGetMyCoursesWithPaginationApi({
    RowsOfPage: 9,
    ...query,
  });
  console.log(data);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-x-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lgb:grid-cols-3 gap-4 lg:gap-6 w-full">
          {isLoading
            ? Array.from({ length: 9 }, (_, index) => (
                <SkeletonCourseCard key={index} />
              ))
            : data?.listOfMyCourses.map((item: Course, index: number) => (
                <CourseCard {...item} key={index} />
              ))}
        </div>
      </div>
      <div className="pt-6">
        { data?.totalCount === 0 ? null : <CurvedPagination total={data?.totalCount ?? 1} rowsOfPage={9} />}
      </div>
      {
        data?.totalCount === 0 && <div className="font-kalamehBlack text-primary-darker text-3xl">دوره ایی وجود ندارد</div>
      }
    </>
  );
}

export default Index;
