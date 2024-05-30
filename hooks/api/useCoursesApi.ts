import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import {
  getCoursesTopApi,
  getCourseDetailsApi,
  getCoursesWithPaginationApi,
  getAllCourseLevelApi,
  getCourseTypesApi,
  getTechnologiesApi,
  getCoursesCommentApi,
  sendCommentApi,
} from "@/services/api/coursesApi";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useGetCoursesWithPaginationApi = (params: any) => {
  return useQuery({
    queryKey: ["coursesWithPagination", params],
    queryFn: () =>
      getCoursesWithPaginationApi(params).then((data) => data.data),
  });
};

export const useGetAllCourseLevelApi = () => {
  return useQuery({
    queryKey: ["courseLevel"],
    queryFn: () => getAllCourseLevelApi().then((data) => data.data),
  });
};

export const useGetCourseTypesApi = () => {
  return useQuery({
    queryKey: ["courseType"],
    queryFn: () => getCourseTypesApi().then((data) => data.data),
  });
};

export const useGetTechnologiesApi = () => {
  return useQuery({
    queryKey: ["technologies"],
    queryFn: () => getTechnologiesApi().then((data) => data.data),
  });
};

export const useGetCoursesCommentApi = (id: string | string[] | undefined) => {
  return useQuery({
    queryKey: ["coursesComments"],
    queryFn: () => getCoursesCommentApi(id).then((data) => data.data),
  });
};

export const useAddCommentApi = (reset: () => void) => {
  return useMutation({
    mutationFn: (payload: addCommentFormType) => sendCommentApi(payload),
    onSuccess: () => {
      toast.success("کامنت با موفقیت ثبت شد");
      reset();
    },
  });
};
