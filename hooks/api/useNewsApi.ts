import { getNewsWithPaginationApi } from "@/services/api/newsApi";
import { useQuery } from "@tanstack/react-query";
import {getNewsDetailsApi} from "@/services/api/newsApi";

export const useGetNewsWithPaginationApi = (params: any) => {
  return useQuery({
    queryKey: ["newsWithPagination", params],
    queryFn: () => getNewsWithPaginationApi(params).then((data) => data.data),
  });
};

export const useGetNewsDetailsApi = (
  NewsId: string | string[] | undefined
) => {
  return useQuery({
    queryKey: ["newsDetails"],
    queryFn: () => getNewsDetailsApi(NewsId).then((data) => data.data),
    enabled: !!NewsId,
  });
};
