import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { useLoaderData, useParams } from "react-router";
import { getMediaDetails } from "../service/apiService";
import Error from "../components/Error";
import MovieDetails from "../features/movie/components/MovieDetails";
import TvDetails from "../features/tv/components/TvDetails";
import NotFound from "../components/NotFound";

export async function loader({ params }) {
  try {
    const { media, id } = params;

    const query = {
      queryKey: [media, id],
      queryFn: () => getMediaDetails({ media, id }),
    };

    await queryClient.prefetchQuery(query);

    return { query };
  } catch (err) {
    return { error: err };
  }
}

export default function MediaDetailsPage() {
  const { query } = useLoaderData();

  const { media, id } = useParams();

  const { data, isLoading, isError, error } = useQuery(query);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <Error error={error} />;

  if (media === "movie" && id) return <MovieDetails movie={data} />;

  if (media === "tv" && id) return <TvDetails show={data} />;

  return <NotFound />;
}
