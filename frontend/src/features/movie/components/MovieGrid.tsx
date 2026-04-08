import { useRouteLoaderData } from "react-router";
import GridLayout from "../../../components/GridLayout";
import MediaCard from "../../../components/ui/MediaCard";

export default function MovieGrid({ movies }) {
  const { imgConfig } = useRouteLoaderData("app");

  const imgBaseUrl = imgConfig.secure_base_url + imgConfig.poster_sizes[3];
  return (
    <GridLayout>
      {movies.map(movie => (
        <MediaCard title={movie.title} img={imgBaseUrl + movie.poster_path} />
      ))}
    </GridLayout>
  );
}
