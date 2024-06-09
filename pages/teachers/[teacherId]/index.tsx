import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import React from "react";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetailBox";
import { useGetTeacherCourseApi, useGetTeacherDetailsApi } from "@/hooks/api/useTeachersApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getTeacherCourseApi, getTeacherDetailsApi } from "@/services/api/teachersApi";
import { GetStaticPaths, GetStaticProps } from "next";
import SuggestedTeacherCard from "@/components/Templates/MainTeacher/SuggestedTeacherCard";
import SkeletonTeacherDetailBox from "@/components/Templates/MainTeacher/SkeletonTeacherDetailBox";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";

export default function TeacherName() {
  const router = useRouter();
  const { query } = router

  const { data: teacherDetailData, isLoading: teacherDetailIsLoading } = useGetTeacherDetailsApi(query.teacherId)

  const { data: courseData, isLoading: courseIsLoding } = useGetTeacherCourseApi(query.teacherId)

  return (
    <>
      <MainBreadcrumb
        items={[
          { id: 1, route: "/teachers", title: "استاد ها" },
          { id: 2, route: `/teachers/${teacherDetailData?.fullName}`, title: teacherDetailData?.fullName },
        ]}
      />
      {teacherDetailIsLoading || !query.teacherId ? <SkeletonTeacherDetailBox /> :
        <TeacherDetailBox {...teacherDetailData} />}
      <TeacherCourses data={courseData?.courseFilterDtos ?? Array.from({ length: 6 })} Content={courseIsLoding || !query.teacherId ? SkeletonCourseCard : CourseCard} />
      <SuggestedTeacherCard />
    </>
  );
}

export const getStaticPaths = (async () => {
  // should updated
  return {
    paths: [
      {
        params: {
          teacherId: "1"
        }
      }
    ],
    fallback: true
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const queryClient = new QueryClient();
  const { params } = context

  await queryClient.prefetchQuery({
    queryKey: ["teacherDetails", params?.teacherId],
    queryFn: async () => {
      const response = await getTeacherDetailsApi(params?.teacherId);
      return response.data;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["teacherCourse", params?.teacherId],
    queryFn: async () => {
      const response = await getTeacherCourseApi(params?.teacherId);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetStaticProps