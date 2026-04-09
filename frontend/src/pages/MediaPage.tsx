import { Link, useParams, useRouteLoaderData } from "react-router";
import { ListFilter, Search } from "lucide-react";
import { useMedia } from "../hooks/useMedia";
import { useSearchParams } from "react-router";
import NotFound from "../components/NotFound";
import Error from "../components/Error";
import MediaCard from "../components/ui/MediaCard";
import GridLayout from "../components/GridLayout";
import CommonFilters from "../components/CommonFilters";
import Menu from "../components/ui/Menu";
import SortByMenu from "../components/SortByMenu";

export default function MediaPage() {
  const { media } = useParams();

  const { imgConfig } = useRouteLoaderData("app");

  const [searchParams, setSearchParams] = useSearchParams();

  const baseFilters = {
    vote_average: searchParams.get("vote_average") ?? null,
    vote_count: searchParams.get("vote_count") ?? null,
    language: searchParams.get("language") ?? null,
    watch_region: searchParams.get("watch_region") ?? null,
    sort_by: searchParams.get("sort_by") ?? null,
    with_genres: searchParams.get("with_genres") ?? null,
    without_genres: searchParams.get("without_genres") ?? null,
    with_watch_providers: searchParams.get("with_watch_providers") ?? null,
    without_watch_providers:
      searchParams.get("without_watch_providers") ?? null,
    with_keywords: searchParams.get("with_keywords"),
    without_keywords: searchParams.get("without_keywords"),
  };

  const movieFilters = {
    ...baseFilters,
    primary_release_year: searchParams.get("primary_release_year") ?? null,
    primary_release_date: searchParams.get("primary_release_date") ?? null,
    release_date: searchParams.get("release_date") ?? null,
    certification: searchParams.get("certification") ?? null,
    region: searchParams.get("region") ?? null,
    with_cast: searchParams.get("with_cast") ?? null,
  };

  const tvFilters = {
    ...baseFilters,
    air_date: searchParams.get("air_date") ?? null,
    first_air_date_year: searchParams.get("first_air_date_year") ?? null,
    first_air_date: searchParams.get("first_air_date") ?? null,
  };

  let filters = media === "movie" ? movieFilters : tvFilters;

  const { data, isLoading, isError, error } = useMedia({ media, filters });

  if (media !== "movie" && media !== "tv") return <NotFound />;

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <Error error={error} />;

  const imgBaseUrl = imgConfig.secure_base_url + imgConfig.poster_sizes[3];

  return (
    <section>
      <div className="flex justify-between py-2">
        <button>
          <ListFilter />
        </button>

        <h1 className="capitalize text-2xl font-bold">{media}</h1>

        <button>
          <Search />
        </button>
      </div>

      <CommonFilters media={media} />

      <SortByMenu media={media} />

      <GridLayout>
        {data.results.map(item => (
          <Link key={item.id} to={`/${media}/${item.id}`}>
            <MediaCard
              title={item.title || item.name}
              img={imgBaseUrl + item.poster_path}
            />
          </Link>
        ))}
      </GridLayout>
    </section>
  );
}
