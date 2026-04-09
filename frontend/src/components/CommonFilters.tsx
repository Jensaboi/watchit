import { NavLink, useSearchParams } from "react-router";
import { getYYMMDDfromIsoString } from "../utility/utility";

const nowIso = new Date().toISOString();

const futureIso = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

const pastIso = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

const past = getYYMMDDfromIsoString(pastIso);

const today = getYYMMDDfromIsoString(nowIso);

const future = getYYMMDDfromIsoString(futureIso);

const filters = [
  {
    name: "Now Playing",
    query: `include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${past}&release_date.lte=${today}`,
  },
  {
    name: "Popular",
    query:
      "include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  },
  {
    name: "Upcoming",
    query: `include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${today}&release_date.lte=${future}`,
  },
  {
    name: "Top Rated",
    query:
      "include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  },
];

export default function CommonFilters({ media }: { media: string }) {
  const [searchParams] = useSearchParams();

  const currentParams = new URLSearchParams(searchParams);

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
