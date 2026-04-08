export default function Error({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error?.message ? error.message : ""}</p>
    </div>
  );
}
