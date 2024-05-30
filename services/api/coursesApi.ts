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

export const getCoursesApi = (page: string) => {
  return httpService.get(
    baseUrl +
      `Home/GetCoursesWithPagination?PageNumber=${page}&RowsOfPage=6&SortingCol=Active&SortType=DESC&TechCount=0`
  );
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
