import { commentProps } from "@/interfaces/courseComment.interface";
import {
  getCoursesTopApi,
  getCourseDetailsApi,
  getCoursesWithPaginationApi,
  getAllCourseLevelApi,
  getCourseTypesApi,
  getTechnologiesApi,
  getCoursesCommentApi,
  sendCommentApi,
  getCourseReplyCommentsApi,
  addReplyCourseCommentApi,
  addCourseCommentLikeApi,
  addCourseCommentDissLikeApi,
  addCourseReserveApi,
  addCourseLikeApi,
  addCourseDissLikeApi,
} from "@/services/api/coursesApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    enabled: !!CourseId,
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

export const useGetCoursesCommentApi = (
  CourseId: string | string[] | undefined
) => {
  return useQuery({
    queryKey: ["coursesComments", CourseId],
    queryFn: () => getCoursesCommentApi(CourseId).then((data) => data.data),
    enabled: !!CourseId,
  });
};

export const useAddCommentApi = (reset: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: commentProps) => sendCommentApi(payload),
    onSuccess: () => {
      toast.success("کامنت با موفقیت ثبت شد");
      reset();
      queryClient.invalidateQueries({ queryKey: ["coursesComments"] });
    },
  });
};

export const useGetCourseReplyCommentsApi = (params: {
  CourseId: string | string[] | undefined;
  CommentId: string;
}) => {
  return useQuery({
    queryKey: ["courseReplyComments"],
    queryFn: () => getCourseReplyCommentsApi(params).then((data) => data.data),
  });
};

export const useAddReplyCourseCommentApi = (reset: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (parmas: commentProps) => addReplyCourseCommentApi(parmas),
    onSuccess: () => {
      toast.success("پاسخ شما ثبت شد");
      reset();
      queryClient.invalidateQueries({
        queryKey: ["coursesComments"],
      });
    },
  });
};

export const useAddCourseCommentLikeApi = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CourseCommandId: string) =>
      addCourseCommentLikeApi(CourseCommandId),
    onSuccess: () => {
      toast.success("کامنتی که لایک کردی با موفقیت انجام شد");
      queryClient.invalidateQueries({
        queryKey: ["coursesComments", courseId],
      });
    },
  });
};

export const useAddCourseCommentDissLikeApi = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CourseCommandId: string) =>
      addCourseCommentDissLikeApi(CourseCommandId),
    onSuccess: () => {
      toast.success("کامنتی که دیسلایک کردی با موفقیت انجام شد");
      queryClient.invalidateQueries({
        queryKey: ["coursesComments", courseId],
      });
    },
  });
};

export const useAddCourseLikeApi = (courseId: string , setIsLiked:any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CourseId: string) =>
      addCourseLikeApi(CourseId),
    onSuccess: () => {
      toast.success("دوره که لایک کردی با موفقیت انجام شد");
      setIsLiked(true)
      queryClient.invalidateQueries({
        queryKey: ["CoursesLike"],
      });
    },
  });
};

export const useAddCourseDissLikeApi = (courseId: string , setIsLiked: any) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (CourseId: string) =>
      addCourseDissLikeApi(CourseId),
    onSuccess: () => {
      toast.success("دوره که دیسلایک کردی با موفقیت انجام شد");
      setIsLiked(false)
      queryClient.invalidateQueries({
        queryKey: ["CoursesLike"],
      });
    },
  });
};

export const useAddCourseReserveApi = () => {
  return useMutation({
    mutationFn: (payload: { courseId: string | string[] | undefined }) =>
      addCourseReserveApi(payload),
    onSuccess: () => {
      toast.success("دوره موردنظر با موفقیت رزرو شد");
    },
  });
};
