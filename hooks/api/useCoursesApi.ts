import { getCoursesApi, getCoursesTopApi } from "@/services/api/coursesApi";
import { useQuery } from "@tanstack/react-query";

export const useGetCoursesTopApi = (Count: number) => {
  return useQuery({
    queryKey: ["coursesTop"],
    queryFn: () => getCoursesTopApi(Count).then((data) => data.data),
  });
};

export const useGetCoursesApi = (page : string | any) => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: () => getCoursesApi(page).then((data) => {
      return{
        data:data.data.courseFilterDtos,
        totalPages:Math.ceil(data.data.totalCount % 6),
      }
    }),
  });
};
