import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getTeachersApi = () => {
  return httpService.get(baseUrl + "Home/GetTeachers");
};
