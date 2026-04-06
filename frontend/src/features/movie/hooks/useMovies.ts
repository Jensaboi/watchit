import { useQuery } from "@tanstack/react-query";
import { getMedia } from "../../../service/apiService";

export async function useMovies(filters = {}) {
  return useQuery({
    queryKey: ["movie"],
    queryFn: () => getMedia({ media: "movie", filters }),
  });
}
