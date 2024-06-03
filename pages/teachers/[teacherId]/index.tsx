import MainBreadcrumb from "@/components/Modules/Breadcrumb/MainBreadcrumb";
import { useRouter } from "next/router";
import React from "react";
import TeacherCourses from "@/components/Templates/MainTeacher/TeacherCourses";
import TeacherDetailBox from "@/components/Templates/MainTeacher/TeacherDetailBox";
import { useGetTeacherDetailsApi } from "@/hooks/api/useTeachersApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getTeacherDetailsApi } from "@/services/api/teachersApi";
import { GetStaticPaths, GetStaticProps } from "next";
import SuggestedTeacherCard from "@/components/Templates/MainTeacher/SuggestedTeacherCard";
import { getSuggestedTeacher } from "@/mock/getSuggestedTeahcer";
import SkeletonTeacherDetailBox from "@/components/Templates/MainTeacher/SkeletonTeacherDetailBox";

export default function TeacherName() {
  const router = useRouter();
  const { query } = router

  const { data, isLoading } = useGetTeacherDetailsApi(query.teacherId)

  return (
    <>
      <MainBreadcrumb
        items={[
          { id: 1, route: "/teachers", title: "استاد ها" },
          { id: 2, route: `/teachers/${data?.fullName}`, title: data?.fullName },
        ]}
      />
      {isLoading || !query.teacherId ? <SkeletonTeacherDetailBox /> :
        <TeacherDetailBox
          coursesCount={data.coursesCount}
          fullName={data.fullName}
          histories={data.histories}
          linkdinProfileLink={data.linkdinProfileLink}
          newsCount={data.newsCount}
          pictureAddress={data.pictureAddress}
          skills={data.skills}
          teacherId={data.teacherId} />}
      <TeacherCourses />
      <SuggestedTeacherCard data={getSuggestedTeacher()} />
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}) satisfies GetStaticProps
