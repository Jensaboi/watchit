import { useCallback } from "react";
import { useSearchParams } from "react-router";

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleFilter = (key: string, val: string) => {
    const values = searchParams.get(key)?.split(",") ?? [];
    let newValues;

    if (values.includes(val)) {
      newValues = values.filter(item => item !== val);
    } else {
      newValues = [...values, val];
    }

    if (newValues.length === 0) {
      searchParams.delete(key);
    } else {
      const str = newValues.join(",");
      searchParams.set(key, str);
    }

    setSearchParams(searchParams);
  };

  const setFilter = useCallback(
    (key, val) => {
      searchParams.set(key, val);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  return { toggleFilter, setFilter };
}
