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

  if (!media) return <NotFound />;

  const [searchParams, setSearchParams] = useSearchParams();

  const movieFilters = {
    primary_release_year: "",
    primary_release_date: "gte or lte",
    language: "",
    release_date: "gte or lte",
    certification: "use in conjunction with region ",
    region: "region",
    sort_by: "sort by options",
    vote_average: "gte or lte",
    vote_count: "gte lte",
    watch_region: "",
    with_cast: "",
    with_genres: "",
    without_genres: "",
    with_watch_providers: "",
  };

  const tvFilters = {
    air_date: "gte or lte",
    first_air_date_year: "",
    first_air_date: "gte or lte",
    sort_by: "sort by options",
    vote_average: "gte or lte",
    vote_count: "gte lte",
    watch_region: "",
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
