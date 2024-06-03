import { getProfileInfoApi } from "@/services/api/panelApi";
import { useQuery } from "@tanstack/react-query";

export const useGetProfileInfoApi = () => {
  return useQuery({
    queryKey: ["profileInfo"],
    queryFn: () => getProfileInfoApi().then((data) => data.data),
    retry: 0,
  });
};
