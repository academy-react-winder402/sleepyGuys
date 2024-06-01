import CourseDescriptionBox from "@/components/Templates/MainCourse/CourseDescription/CourseDescriptionBox";
import CourseDetailsBox from "@/components/Templates/MainCourse/CourseDetails/CourseDetailsBox";
import CourseHeadlinesBox from "@/components/Templates/MainCourse/CourseHeadlines/CourseHeadlinesBox";
import RelatedCoursesBox from "@/components/Templates/MainCourse/RelatedCourses/RelatedCoursesBox";
import React from "react";
import { getCourseTitles } from "@/mock/getCourseTitles";
import CourseCommentsBox from "@/components/Templates/MainCourse/CourseComments/CourseCommentsBox";
import CourseSummaryBox from "@/components/Templates/MainCourse/CourseSummary/CourseSummaryBox";
import TeacherDetailBox from "@/components/Templates/MainCourse/TeacherDetails/TeacherDetailsBox";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getCourseDetailsApi } from "@/services/api/coursesApi";
import { getCoursesCommentApi } from "@/services/api/coursesApi";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useGetCourseDetailsApi, useGetCourseReplyCommentsApi, useGetCoursesCommentApi } from "@/hooks/api/useCoursesApi";
import SkeletonCourseDetailsBox from "@/components/Templates/MainCourse/CourseDetails/SkeletonCourseDetailsBox";
import SkeletonTeacherDetailsBox from "@/components/Templates/MainCourse/TeacherDetails/SkeletonTeacherDetailsBox";

function CorseInfo({ }) {
  const router = useRouter()
  const { query } = router

  const { data: courseDetailsData, isLoading: courseDetailsIsLoading } = useGetCourseDetailsApi(query.courseId)

  const { data: commentsData, isLoading: isCommentsLoading } = useGetCoursesCommentApi(query.courseId)

  // shoud be fixed
  const { data: replyCommentsData, isLoading: replyCommentsIsLoading } = useGetCourseReplyCommentsApi({ CourseId: query.courseId, CommentId: "jndjfknds" })
  return (
    <>
      {courseDetailsIsLoading ? <SkeletonCourseDetailsBox /> : <CourseDetailsBox {...courseDetailsData} />}
      <div className="flex items-start gap-x-8">
        <div className="flex flex-col w-full lg:w-[70%] gap-y-8 shadow-2xl shadow-shadowColor dark:shadow-none rounded-3xl">
          <CourseSummaryBox {...courseDetailsData} isLoading={courseDetailsIsLoading} />
          <CourseDescriptionBox description={courseDetailsData?.describe ?? ""} isLoading={courseDetailsIsLoading} />
          <CourseHeadlinesBox data={getCourseTitles()} />
          <CourseCommentsBox data={commentsData} isCommentsLoading={isCommentsLoading} />
        </div>
        <div className="hidden lg:flex flex-col gap-y-8 w-1/3">
          {courseDetailsIsLoading ? <SkeletonTeacherDetailsBox /> : <TeacherDetailBox teacherName={courseDetailsData?.teacherName} teacherId={courseDetailsData?.teacherId} />}
          <RelatedCoursesBox />
        </div>
      </div>
    </>
  );
}

export default CorseInfo;

export const getStaticPaths = (async () => {
  // should updated
  return {
    paths: [
      {
        params: {
          courseId: 'next-js'
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
    queryKey: ["courseDetails"],
    queryFn: async () => {
      const response = await getCourseDetailsApi(params?.courseId)
      return response.data
    }
  })

  await queryClient.prefetchQuery({
    queryKey: ["courseComments"],
    queryFn: async () => {
      const response = await getCoursesCommentApi(params?.courseId);
      return response.data;
    }
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      query: params?.courseId
    }
  }
}) satisfies GetStaticProps

