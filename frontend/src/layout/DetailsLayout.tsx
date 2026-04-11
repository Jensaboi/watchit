import { ArrowLeft } from "lucide-react";
import { Outlet } from "react-router";

export default function DetailsLayout() {
  return (
    <div className="w-full h-full">
      <header>
        <button title="Go back" aria-label="Go back" className="icon-btn">
          <ArrowLeft />
        </button>
      </header>

      <Outlet />
    </div>
  );
}
