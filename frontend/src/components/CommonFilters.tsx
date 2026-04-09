import { NavLink } from "react-router";

const filters = [
  {
    name: "Now Playing",
    queryOptions: "",
  },
  { name: "Popular", queryObject: {} },
  { name: "Upcoming", queryObject: "" },
  { name: "Top Rated", queryObject: "" },
];

export default function CommonFilters({ media }: { media: string }) {
  return (
    <ul className="flex gap-4 whitespace-nowrap overflow-x-scroll py-4 no-scrollbar">
      {filters.map(filter => (
        <li className="text-lg font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-zinc-50" : "text-zinc-400"
            }
            to={`/${media}${filter.queryString}`}
          >
            {filter.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
