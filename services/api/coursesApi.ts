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
