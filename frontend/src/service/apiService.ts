import { createQueryString } from "../utility/utility";

export async function getMedia({ media, filters }) {
  if (!media) throw new Error("Media type is required");

  const queryString = createQueryString(filters);

  console.log(queryString);

  const res = await fetch(`/api/discover/${media}${queryString}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message ?? `Failed to load ${media}s...`);
  }

  return data;
}

export async function getImageConfig() {
  const res = await fetch("/api/configuration");

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to load configuration details...");
  }

  return data.images;
}

export async function getCountries() {
  const res = await fetch("/api/configuration/countries");

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to load countries...");
  }

  return data;
}
