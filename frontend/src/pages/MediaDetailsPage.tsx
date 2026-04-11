import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router";
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

  const { imgConfig } = useRouteLoaderData("app");

  const { media, id } = useParams();
  if (media !== "movie" && media !== "tv") return <NotFound />;

  const { data, isLoading, isError, error } = useQuery(query);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <Error error={error} />;

  if (!id) return <NotFound />;

  const mediaName =
    media === "movie" ? data?.title : media === "tv" ? data?.name : "";

  const posterBaseUrl =
    imgConfig.secure_base_url +
    imgConfig.poster_sizes[imgConfig.poster_sizes.length - 1];

  const backdropBaseUrl =
    imgConfig.secure_base_url +
    imgConfig.backdrop_sizes[imgConfig.backdrop_sizes.length - 1];

  console.log(data);
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full max-h-150">
        <div className="absolute inset-0 w-full h-full z-2 bg-zinc-900/50"></div>
        <div className="absolute inset-0 w-full h-full z-2 bg-linear-to-r from-zinc-900/90 from-30% to-zinc-900/20"></div>
        <img
          className="absolute z-1 inset-0 w-full h-full object-cover object-center"
          src={backdropBaseUrl + data.backdrop_path}
          alt={`${mediaName} backdrop image`}
        />
        <div className="w-full h-full flex p-8 gap-8">
          <img
            className="z-10 rounded-md shadow-lg"
            src={posterBaseUrl + data?.poster_path}
            alt={`${mediaName} poster`}
          />
          <section className="z-10 w-full h-full py-4">
            <h1 className="text-3xl font-bold">{mediaName}</h1>
            <span className="block text-sm mb-6">
              {data.genres.map(genre => genre.name).join(", ")}
            </span>

            <p className="text-base/7">{data.overview}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
