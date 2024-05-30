import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getCoursesTopApi = (Count: number) => {
  return httpService.get(baseUrl + `Home/GetCoursesTop?Count=${Count}`);
};

export const getCourseDetailsApi = (
  CourseId: string | string[] | undefined
) => {
  return httpService.get(
    baseUrl + `Home/GetCourseDetails?CourseId=${CourseId}`
  );
};

export const getCoursesWithPaginationApi = (params: any) => {
  return httpService.get(baseUrl + `Home/GetCoursesWithPagination`, { params });
};

export const getAllCourseLevelApi = () => {
  return httpService.get(baseUrl + "CourseLevel/GetAllCourseLevel");
};

export const getCourseTypesApi = () => {
  return httpService.get(baseUrl + "CourseType/GetCourseTypes");
};

export const getTechnologiesApi = () => {
  return httpService.get(baseUrl + "Home/GetTechnologies");
};

export const getCoursesCommentApi = (id : number | any) => {
  return httpService.get(
    baseUrl +
      `Course/GetCourseCommnets/${id}`
  );
};

export const sendCommentApi = (payload: addCommentFormType) => {
  return httpService.post(baseUrl + `Course/AddCommentCourse`, payload);
};
