import { useMovies } from "../hooks/useMovies";

export default function MoviesView() {
  const { isLoading, data, error, isError } = useMovies({ hej: "hej" });

  return <div className="w-full h-full"></div>;
}
