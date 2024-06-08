import { getNewsWithPaginationApi } from "@/services/api/newsApi";
import { useQuery } from "@tanstack/react-query";






export const useGetNewsWithPaginationApi = (params: any) => {
    console.log(params)
    return useQuery({
      queryKey: ["newsWithPagination", params],
      queryFn: () =>
        getNewsWithPaginationApi(params).then((data) => data.data),
    });
  };



