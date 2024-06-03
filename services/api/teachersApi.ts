import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getTeachersApi = () => {
  return httpService.get(baseUrl + "Home/GetTeachers");
};

export const getTeacherDetailsApi = (
  TeacherId: string | string[] | undefined
) => {
  return httpService.get(
    baseUrl + `Home/GetTeacherDetails?TeacherId=${TeacherId}`
  );
};

export const getTeacherCourseApi = (
  TeacherId: string | string[] | undefined
) => {
  return httpService.get(
    baseUrl + `Home/GetCoursesWithPagination?TeacherId=${TeacherId}`
  );
};
