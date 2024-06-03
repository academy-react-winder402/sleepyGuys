import { getTeacherDetailsApi, getTeachersApi } from "@/services/api/teachersApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTeachersApi = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: () => getTeachersApi().then((data) => data.data),
  });
};

export const useGetCourseDetailsApi = (
  TeacherId: string | string[] | undefined
) => {
  return useQuery({
    queryKey: ["teacherDetails"],
    queryFn: () => getTeacherDetailsApi(TeacherId).then((data) => data.data),
  });
};
