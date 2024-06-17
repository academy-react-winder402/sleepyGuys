import { getMyCourseListApi, getProfileInfoApi } from "@/services/api/panelApi";
import { isUserAuthenticated } from "@/utils/isUserAuthenticated";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileInfoApi = () => {
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: () => getProfileInfoApi().then((data) => data.data),
    retry: 0,
    enabled:!!isUserAuthenticated()
  });
};

export const useGetMyCoursesWithPaginationApi = (params: any) => {
  return useQuery({
    queryKey: ["myCoursesWithPagination", params],
    queryFn: () =>
      getMyCourseListApi(params).then((data) => data.data),
  });
};
