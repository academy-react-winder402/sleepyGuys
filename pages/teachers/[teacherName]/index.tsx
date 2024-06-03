import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import React from "react";
import { getSingleTeacheInfo } from "@/mock/getSingleTeacheInfo";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";
import SuggestedTeacherCard from "@/components/Templates/MainTeacher/SuggestedTeacherCard";
import { getSuggestedTeacher } from "@/mock/getSuggestedTeahcer";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetailBox";
import { useGetTeacherDetailsApi } from "@/hooks/api/useTeachersApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getTeacherDetailsApi } from "@/services/api/teachersApi";
import { GetServerSideProps } from "next";

export default function TeacherName() {
  const router = useRouter();
  const name: any = router.query.teacherName;
  const teacherId: string | string[] | undefined = router.query.teacherId
  
  const { data, isLoading } = useGetTeacherDetailsApi(teacherId)

  return (
    <>
      <MainBreadcrumb
        items={[
          { id: 1, route: "/teachers", title: "استاد ها" },
          { id: 2, route: `/teachers/${name}`, title: name },
        ]}
      />
      <TeacherDetailBox isLoading={isLoading} coursesCount={data?.coursesCount} fullName={data?.fullName} histories={data?.histories} linkdinProfileLink={data?.linkdinProfileLink} newsCount={data?.newsCount} pictureAddress={data?.pictureAddress} skills={data?.skills} teacherId={data?.teacherId}/>
      <TeacherCourses />
      {/* <SuggestedTeacherCard data={getSuggestedTeacher()} /> */}
      {/*  */}
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const queryClient = new QueryClient();
  const { query } = context

  await queryClient.prefetchQuery({
    queryKey: ["coursesWithPagination", query],
    queryFn: async () => {
      const response = await getTeacherDetailsApi(query.teacherId);
      return response.data;
    },
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetServerSideProps
