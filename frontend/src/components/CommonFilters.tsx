import { NavLink, useSearchParams } from "react-router";
import { getYYMMDDfromIsoString } from "../utility/utility";

const nowIso = new Date().toISOString();

const futureIso = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

const pastIso = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

const past = getYYMMDDfromIsoString(pastIso);

const today = getYYMMDDfromIsoString(nowIso);

const future = getYYMMDDfromIsoString(futureIso);

const movieFilters = [
  {
    name: "Now Playing",
    query: `sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${past}&release_date.lte=${today}`,
  },
  {
    name: "Popular",
    query: "sort_by=popularity.desc",
  },
  {
    name: "Upcoming",
    query: `sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${today}&release_date.lte=${future}`,
  },
  {
    name: "Top Rated",
    query:
      "sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  },
];

const tvFilters = [
  {
    name: "Airing Today",
    query: `sort_by=popularity.desc&air_date.lte=${today}&air_date.gte=${today}`,
  },
  {
    name: "Popular",
    query: "sort_by=popularity.desc",
  },
  {
    name: "Upcoming",
    query: `sort_by=popularity.desc&air_date.lte=${future}&air_date.gte=${today}`,
  },
  {
    name: "Top Rated",
    query:
      "sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  },
];

export default function CommonFilters({ media }: { media: string }) {
  const [searchParams] = useSearchParams();

  const currentParams = new URLSearchParams(searchParams);

  const filters = media === "movie" ? movieFilters : tvFilters;

  return (
    <ul className="flex gap-4 whitespace-nowrap overflow-x-scroll py-4 no-scrollbar">
      {filters.map(filter => {
        const filterParams = new URLSearchParams(filter.query);

        const isExactMatch =
          [...currentParams.entries()].length ===
            [...filterParams.entries()].length &&
          [...filterParams.entries()].every(
            ([key, value]) => currentParams.get(key) === value,
          );

        return (
          <li key={filter.name} className="text-lg font-medium">
            <NavLink
              className={() =>
                isExactMatch ? "text-zinc-200" : "text-zinc-500"
              }
              to={`/${media}?${filter.query}`}
            >
              {filter.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
