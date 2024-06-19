import { getCoursesTopApi } from "@/services/api/coursesApi";
import { getLandingApi } from "@/services/api/landingApi";
import { useQuery } from "@tanstack/react-query";


export const useGetLandingApi = () => {
    return useQuery({
      queryKey: ["landingInfo"],
      queryFn: () => getLandingApi().then((data) => data.data),
    });
  };