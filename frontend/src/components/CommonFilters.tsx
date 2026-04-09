import { NavLink, useSearchParams } from "react-router";

const filters = [
  {
    name: "Now Playing",
    query: {
      sort_by: "popularity.desc",
      with_release_type: "2|3",
      "release_date.gte": "{min_date}",
      "release_date.lte": "{max_date}",
    },
  },
  {
    name: "Popular",
    query: {},
  },
  { name: "Upcoming", query: {} },
  { name: "Top Rated", query: {} },
];

export default function CommonFilters({ media }: { media: string }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ul className="flex gap-4 whitespace-nowrap overflow-x-scroll py-4 no-scrollbar">
      {filters.map(filter => (
        <li className="text-lg font-medium">
          <button onClick={() => setSearchParams(filter.query)}>
            {filter.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
