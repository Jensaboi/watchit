import { useRouteLoaderData } from "react-router";

export default function MovieDetails({ movie }) {
  const { imgConfig } = useRouteLoaderData("app");

  const posterBaseUrl =
    imgConfig.secure_base_url +
    imgConfig.poster_sizes[imgConfig.poster_sizes.length - 1];

  const backdropBaseUrl =
    imgConfig.secure_base_url +
    imgConfig.backdrop_sizes[imgConfig.backdrop_sizes.length - 1];

  return (
    <section className="w-full h-screen">
      <img
        className="w-full h-full object-center object-cover"
        src={backdropBaseUrl + movie.backdrop_path}
      />
      <div></div>
    </section>
  );
}
