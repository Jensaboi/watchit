export function createQueryString(filters) {
  const filterArr = Object.entries(filters)
    .filter(([key, val]) => val !== null)
    .map(([key, val]) => `${key}=${val}`);

  return `?${filterArr.join("&")}`;
}

export function getYYMMDDfromIsoString(todayIsoString: string): string {
  return todayIsoString.split("T")?.[0] ?? "";
}
