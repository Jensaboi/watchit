import { useParams } from "react-router";
import MovieList from "../features/movie/view/MovieList";
import TvList from "../features/tv/view/TvList";
import NotFound from "../components/NotFound";

export default function MediaPage() {
  const { media } = useParams();

  console.log(media);

  if (media === "movie") return <MovieList />;

  if (media === "tv") return <TvList />;

  return <NotFound />;
}
