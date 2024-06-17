import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getProfileInfoApi = (token?: string | undefined) => {
  return httpService.get(baseUrl + `SharePanel/GetProfileInfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyCourseListApi = (params : any) => {
  return httpService.get(baseUrl + `SharePanel/GetMyCourses`, { params });
};

