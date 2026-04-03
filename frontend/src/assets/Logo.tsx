import { Link } from "react-router";

export default function Logo() {
  return (
    <Link className="block text-xl font-medium" to={"/"}>
      Watch<span className="text-2xl">it</span>
    </Link>
  );
}
