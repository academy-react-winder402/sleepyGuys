import { getCoursesTopApi } from "@/services/api/coursesApi";
import { useQuery } from "@tanstack/react-query";

export const useGetCoursesTopApi = (Count: number) => {
  return useQuery({
    queryKey: ["coursesTop"],
    queryFn: () => getCoursesTopApi(Count).then((data) => data.data),
  });
};
