import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import React from "react";
import { getSingleTeacheInfo } from "@/mock/getSingleTeacheInfo";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";
import SuggestedTeacherCard from "@/components/Templates/MainTeacher/SuggestedTeacherCard";
import { getSuggestedTeacher } from "@/mock/getSuggestedTeahcer";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetailBox";
import { useGetTeacherCourseApi, useGetTeacherDetailsApi } from "@/hooks/api/useTeachersApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getTeacherCourseApi, getTeacherDetailsApi } from "@/services/api/teachersApi";
import { GetServerSideProps } from "next";
import SkeletonCourseCard from "@/components/Modules/CourseCard/SkeletonCourseCard";
import CourseCard from "@/components/Modules/CourseCard/CourseCard";

export default function TeacherName() {
  const router = useRouter();
  const name: any = router.query.teacherName;
  const teacherId: string | string[] | undefined = router.query.teacherId
  
  const { data, isLoading } = useGetTeacherDetailsApi(teacherId)
  const { data : courseData, isLoading : courseIsLoding } = useGetTeacherCourseApi(teacherId)

  return (
    <>
      <MainBreadcrumb
        items={[
          { id: 1, route: "/teachers", title: "استاد ها" },
          { id: 2, route: `/teachers/${name}`, title: name },
        ]}
      />
      <TeacherDetailBox isLoading={isLoading} coursesCount={data?.coursesCount} fullName={data?.fullName} histories={data?.histories} linkdinProfileLink={data?.linkdinProfileLink} newsCount={data?.newsCount} pictureAddress={data?.pictureAddress} skills={data?.skills} teacherId={data?.teacherId}/>
      <TeacherCourses data={courseData?.courseFilterDtos ?? Array.from({ length: 6 })} Content={isLoading ? SkeletonCourseCard : CourseCard}/>
      {/* <SuggestedTeacherCard title={courseData?.title} img={courseData?.tumbImageAddress} /> */}
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const queryClient = new QueryClient();
  const { query , params } = context

  await queryClient.prefetchQuery({
    queryKey: ["teacherDetails", query],
    queryFn: async () => {
      const response = await getTeacherDetailsApi(query.teacherId);
      return response.data;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["teacherCourse", query],
    queryFn: async () => {
      const response = await getTeacherCourseApi(query.teacherId);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      query: params?.courseId || null,
    },
  };
}) satisfies GetServerSideProps
