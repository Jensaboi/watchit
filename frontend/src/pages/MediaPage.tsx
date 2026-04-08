import { useParams } from "react-router";
import NotFound from "../components/NotFound";

export default function MediaPage() {
  const { media } = useParams();

  return <NotFound />;
}
