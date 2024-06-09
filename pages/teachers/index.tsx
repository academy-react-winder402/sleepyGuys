import TeachersBox from "@/components/Templates/Teachers/TeachersBox";
import { getTeachersApi } from "@/services/api/teachersApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

export default function Teachears() {
  return (
    <TeachersBox />
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const response = await getTeachersApi()
      return response.data
    },
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}