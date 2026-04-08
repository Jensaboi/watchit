type MediaCardProps = {
  title: string;
  img: string;
};

export default function MediaCard({ title, img }: MediaCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-7/10">
        <img
          className="absolute w-full opacity-0 group-hover:opacity-50 blur-lg"
          src={img}
          alt=""
        />
        <img
          className="relative z-1 w-full rounded-sm shadow-lg"
          src={img}
          alt={`${title} poster`}
        />
      </div>

      <div>
        <h3 className="text-md mt-2 font-semibold truncate group-hover:underline underline-offset-4">
          {title}
        </h3>
      </div>
    </div>
  );
}
