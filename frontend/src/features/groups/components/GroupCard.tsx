export default function GroupCard({ name }) {
  return (
    <article className="grid grid-cols-[30px 1fr]">
      <h3>{name}</h3>
    </article>
  );
}
