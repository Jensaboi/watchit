export async function getMedia({ media, filters }) {
  if (!media) throw new Error("Media type is required");

  const res = await fetch(`/api/discover/${media}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message ?? `Failed to load ${media}s...`);
  }

  return data;
}
