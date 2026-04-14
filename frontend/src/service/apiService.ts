import { createQueryString } from "../utility/utility";

export async function getMedia({ media, filters }) {
  if (!media) throw new Error("Media type is required");

  const queryString = createQueryString(filters);

  const res = await fetch(`/api/discover/${media}${queryString}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to load ${media}'s: ${data?.message ?? ""}`);
  }

  return data;
}

export async function getMediaDetails({ media, id }) {
  const res = await fetch(`/api/${media}/${id}`);

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Failed to load ${media} details: ${data?.message ?? ""}`);
  }

  return data;
}

export async function getImageConfig() {
  const res = await fetch("/api/configuration");

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to load image configuration...");
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
