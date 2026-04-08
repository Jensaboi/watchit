import { useQuery } from "@tanstack/react-query";
import { getMedia } from "../service/apiService";
type UseMediaProps = {
  media: string;
  filters: any;
};
export function useMedia({ media, filters }: UseMediaProps) {
  return useQuery({
    queryKey: [media],
    queryFn: () => getMedia({ media, filters }),
  });
}
