import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getProfileInfoApi = () => {
  return httpService.get(baseUrl + `SharePanel/GetProfileInfo`);
};