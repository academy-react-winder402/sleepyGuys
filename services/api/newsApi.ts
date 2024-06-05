import httpService from "@/services/httpService";
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getNewsWithPaginationApi = (params: any) => {
  return httpService.get(baseUrl + `News`, { params });
};

export const getNewsDetailsApi = (
  NewsId: string | string[] | undefined
) => {
  return httpService.get(
    baseUrl + `News/${NewsId}`
  );
};
