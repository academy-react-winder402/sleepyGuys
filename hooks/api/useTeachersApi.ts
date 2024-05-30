import { getTeachersApi } from "@/services/api/teachersApi";
import { useQuery } from "@tanstack/react-query";

export const useGetTeachersApi = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: () => getTeachersApi().then((data) => data.data),
  });
};
