import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getCoursesTopApi = (Count: number) => {
  return httpService.get(baseUrl + `Home/GetCoursesTop?Count=${Count}`);
};

export const getCoursesApi = (page : string) => {
  return httpService.get(baseUrl + `Home/GetCoursesWithPagination?PageNumber=${page}&RowsOfPage=6&SortingCol=Active&SortType=DESC&TechCount=0`);
};
