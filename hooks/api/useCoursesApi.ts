import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import {
  getCoursesApi,
  getCoursesTopApi,
  getCourseDetailsApi,
  getCoursesCommentApi,
  sendCommentApi,
} from "@/services/api/coursesApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const useGetCoursesTopApi = (Count: number) => {
  return useQuery({
    queryKey: ["coursesTop"],
    queryFn: () => getCoursesTopApi(Count).then((data) => data.data),
  });
};

export const useGetCourseDetailsApi = (
  CourseId: string | string[] | undefined
) => {
  return useQuery({
    queryKey: ["courseDetails"],
    queryFn: () => getCourseDetailsApi(CourseId).then((data) => data.data),
  });
};

export const useGetCoursesApi = (page: string | any) => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      getCoursesApi(page).then((data) => {
        return {
          data: data.data.courseFilterDtos,
          totalPages: Math.ceil(data.data.totalCount % 6),
        };
      }),
  });
};

export const useGetCoursesCommentApi = (id: string | string[] | undefined) => {
  return useQuery({
    queryKey: ["coursesComments"],
    queryFn: () =>
      getCoursesCommentApi(id).then((data) => data.data),
  });
};

export const useAddCommentApi = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: addCommentFormType) => sendCommentApi(payload),
    onSuccess: (res) => {
      toast.success("کامنت با موفقیت ثبت شد");
    },
  });
};
