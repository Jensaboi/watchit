import "../config/config.ts";

class TMDBService {
  constructor(accessToken: string | undefined) {
    if (!accessToken) {
      throw new Error(`TMDB access token required.`);
    }
    this.accessToken = accessToken;
  }

  baseUrl = "https://api.themoviedb.org/3";

  async get(url: string) {
    const res = await fetch(this.baseUrl + url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        accept: "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to fetch: ${url}`, { cause: error });
    }

    return res.json();
  }
}

const tmdbService = new TMDBService(process.env.TMDB_ACCESS_TOKEN);

export default tmdbService;
