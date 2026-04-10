import { Link, useParams, useRouteLoaderData } from "react-router";
import { ListFilter, Search } from "lucide-react";
import { useMedia } from "../hooks/useMedia";
import { useSearchParams } from "react-router";
import NotFound from "../components/NotFound";
import Error from "../components/Error";
import MediaCard from "../components/ui/MediaCard";
import GridLayout from "../components/GridLayout";
import CommonFilters from "../components/CommonFilters";
import SortByMenu from "../components/SortByMenu";

export default function MediaPage() {
  const { media } = useParams();

  const { imgConfig } = useRouteLoaderData("app");

  const [searchParams] = useSearchParams();

  const baseFilters = {
    sort_by: searchParams.get("sort_by") ?? null,
    "vote_average.gte": searchParams.get("vote_average.gte") ?? null,
    "vote_average.lte": searchParams.get("vote_average.lte") ?? null,
    "vote_count.gte": searchParams.get("vote_count.gte") ?? null,
    "vote_count.lte": searchParams.get("vote_count.lte") ?? null,
    language: searchParams.get("language") ?? null,
    watch_region: searchParams.get("watch_region") ?? null,
    with_genres: searchParams.get("with_genres") ?? null,
    without_genres: searchParams.get("without_genres") ?? null,
    with_watch_providers: searchParams.get("with_watch_providers") ?? null,
    with_watch_monetization_types:
      searchParams.get("with_watch_monetization_types") ?? null,
    without_watch_providers:
      searchParams.get("without_watch_providers") ?? null,
    with_keywords: searchParams.get("with_keywords") ?? null,
    without_keywords: searchParams.get("without_keywords") ?? null,
    with_companies: searchParams.get("with_companies") ?? null,
    without_companies: searchParams.get("without_companies") ?? null,
  };

  const movieFilters = {
    ...baseFilters,
    "certification.gte": searchParams.get("certification.gte") ?? null,
    "certification.lte": searchParams.get("certification.lte") ?? null,
    certification_country: searchParams.get("certification_country") ?? null,
    primary_release_year: searchParams.get("primary_release_year") ?? null,
    "primary_release_date.gte":
      searchParams.get("primary_release_date.gte") ?? null,
    "primary_release_date.lte":
      searchParams.get("primary_release_date.lte") ?? null,
    region: searchParams.get("region") ?? null,
    "release_date.lte": searchParams.get("release_date.lte") ?? null,
    "release_date.gte": searchParams.get("release_date.gte") ?? null,
    with_cast: searchParams.get("with_cast") ?? null,
    with_crew: searchParams.get("with_crew") ?? null,
    with_people: searchParams.get("with_people") ?? null,
    "with_runtime.gte": searchParams.get("with_runtime.gte") ?? null,
    "with_runtime.lte": searchParams.get("with_runtime.lte") ?? null,
    with_release_type: searchParams.get("with_release_type") ?? null,
    year: searchParams.get("year") ?? null,
  };

  const tvFilters = {
    ...baseFilters,
    "air_date.gte": searchParams.get("air_date.gte") ?? null,
    "air_date.lte": searchParams.get("air_date.lte") ?? null,
    first_air_date_year: searchParams.get("first_air_date_year") ?? null,
    "first_air_date.gte": searchParams.get("first_air_date.gte") ?? null,
    "first_air_date.lte": searchParams.get("first_air_date.lte") ?? null,
    with_type: searchParams.get("with_type") ?? null,
    with_status: searchParams.get("with_status") ?? null,
  };

  const filters = media === "movie" ? movieFilters : tvFilters;

  const { data, isLoading, isError, error } = useMedia({ media, filters });

  if (media !== "movie" && media !== "tv") return <NotFound />;

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <Error error={error} />;

  const imgBaseUrl = imgConfig.secure_base_url + imgConfig.poster_sizes[3];

  return (
    <section className="px-4">
      <div className="flex justify-between py-2">
        <button
          className="icon-btn"
          title="filter"
          aria-label="Open filter menu"
        >
          <ListFilter />
        </button>

        <h1 className="capitalize text-2xl font-bold">{media}</h1>

        <button title="Search" aria-label="Open search" className="icon-btn">
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
