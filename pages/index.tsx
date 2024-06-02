import Categories from "@/components/Templates/Landing/Categories/Categories";
import HeroBox from "@/components/Templates/Landing/Hero/HeroBox";
import NewCoursesBox from "@/components/Templates/Landing/NewCourses/NewCoursesBox";
import LastCoursesBox from "@/components/Templates/Landing/LastCourses/LastCoursesBox";
import NewsBox from "@/components/Templates/Landing/News/NewsBox";
import ServiceBox from "@/components/Templates/Landing/Services/ServicesBox";
import { getCoursesTopApi, getTechnologiesApi } from "@/services/api/coursesApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroBox />
      <Categories />
      <NewCoursesBox />
      <NewsBox />
      <LastCoursesBox />
      <ServiceBox />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['coursesTop'],
    queryFn: async () => {
      const response = await getCoursesTopApi(7)
      return response.data
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['technologies'],
    queryFn: async () => {
      const response = await getTechnologiesApi()
      return response.data
    },
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}