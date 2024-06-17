import { getMyCourseListApi, getProfileInfoApi, postProfileApi } from "@/services/api/panelApi";
import { isUserAuthenticated } from "@/utils/isUserAuthenticated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

export const useAddProfileApi = (reset: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: any) => postProfileApi(payload),
    onSuccess: () => {
      toast.success("پروفایل با موفقیت ثبت شد");
      reset();
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};
