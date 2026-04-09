import { useSearchParams } from "react-router";
import Menu from "./ui/Menu";
import { ArrowDown, ArrowUp, MoveDown, MoveUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters";

const movieOptions = [
  { name: "title", param: "title" },
  { name: "popularity", param: "popularity" },
  { name: "revenue", param: "revenue" },
  { name: "release date", param: "primary_release_date" },
  { name: "vote average", param: "vote_average" },
  { name: "vote count", param: "vote_count" },
];

const tvOptions = [
  { name: "name", param: "name" },
  { name: "air date", param: "first_air_date" },
  { name: "popularity", param: "popularity" },
  { name: "vote average", param: "vote_average" },
  { name: "vote count", param: "vote_count" },
];

export default function SortByMenu({ media }: { media: string }) {
  const options = media === "movie" ? movieOptions : tvOptions;

  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");

  const [param, setParam] = useState(sortBy?.split(".")?.[0] ?? null);

  const [order, setOrder] = useState<string>(sortBy?.split(".")?.[1] ?? "desc");

  const { setFilter } = useFilters();

  const selectedOption = options.find(item => item.param === param);

  const toggleOrder = () => {
    if (order === "desc") {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  };

  useEffect(() => {
    if (param === null) {
      return;
    } else {
      setFilter("sort_by", `${param}.${order}`);
    }
  }, [setFilter, order, param]);

  return (
    <div className="flex gap-4 justify-end items-center">
      <Menu>
        <Menu.Toggle>{selectedOption?.name ?? "Sort by"}</Menu.Toggle>
        <Menu.Dropdown>
          <ul className="flex flex-col">
            {options.map(option => (
              <li key={option.name}>
                <button
                  onClick={() => {
                    setParam(option.param);
                  }}
                  className="p-1 w-full text-start hover:bg-zinc-900 rounded-sm"
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
        </Menu.Dropdown>
      </Menu>

      <button
        title={order === "asc" ? "Ascending order" : "Descending order"}
        onClick={toggleOrder}
      >
        {order === "desc" ? <ArrowDown /> : <ArrowUp />}
      </button>
    </div>
  );
}
