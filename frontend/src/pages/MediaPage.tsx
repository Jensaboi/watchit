import { useParams } from "react-router";
import NotFound from "../components/NotFound";
import MoviesView from "../features/movie/view/MoviesView";
import TvView from "../features/tv/view/TvView";

export default function MediaPage() {
  const { media } = useParams();

  if (media === "movie") return <MoviesView />;

  if (media === "tv") return <TvView />;

  return <NotFound />;
}
