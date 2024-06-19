import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getProfileInfoApi = (token?: string | undefined) => {
  return httpService.get(baseUrl + `SharePanel/GetProfileInfo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyCourseListApi = (params: any) => {
  return httpService.get(baseUrl + `SharePanel/GetMyCourses`, { params });
};

export const postProfileApi = (params: any) => {
  return httpService.post(baseUrl + `SharePanel/AddProfileImage`, { params });
};

export const getMyFavoriteCoursesApi = () => {
  return httpService.get(baseUrl + `SharePanel/GetMyFavoriteCourses`);
};

export const getMyFavoriteNewsApi = () => {
  return httpService.get(baseUrl + `SharePanel/GetMyFavoriteNews`);
};
