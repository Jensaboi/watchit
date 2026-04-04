import { Link, Outlet } from "react-router";
import { X } from "lucide-react";
import Logo from "../assets/Logo";
import { useState } from "react";

const navItems = [
  { name: "Movies", path: "/movie" },
  { name: "Shows", path: "/tv" },
  { name: "Login", path: "/login" },
];

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="h-screen w-full flex flex-col">
      <header>
        <nav
          data-isOpen={navOpen}
          className="translate-0 absolute right-0 bg-zinc-900 w-full h-screen flex flex-col data-isOpen[true]:translate-x-full"
        >
          <div className="p-4 flex justify-between align-center">
            <Logo />

            <button
              onClick={() => setNavOpen(!navOpen)}
              className="bg-indigo-500/20 hover:bg-indigo-500/30 rounded-sm cursor-pointer hover:shadow-indigo-400/50 p-2 hover:shadow-xs "
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col flex-1 p-2">
            {navItems.map(item => (
              <li>
                <Link
                  className="block py-3 px-2 hover:bg-zinc-800 rounded-md"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex p-4 flex-col gap-2">
            <Link className="primary-btn" to={"/signin"}>
              Sign in
            </Link>
            <Link className="secondary-btn" to={"/signup"}>
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}
