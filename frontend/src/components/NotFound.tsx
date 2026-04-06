import { useNavigate } from "react-router";
import Button from "./ui/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full text-center">
        <h1 className="text-2xl my-6">404 NOT FOUND</h1>
        <p>The page you are looking doesnt exist</p>
        <Button className="my-4" variant="primary" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </>
  );
}
