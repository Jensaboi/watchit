import { Link, Outlet } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo";
import { useState } from "react";

const navItems = [
  { name: "Movies", path: "/movie" },
  { name: "Tv-Shows", path: "/tv" },
  { name: "Groups", path: "/groups" },
];

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col">
      <header>
        <div className="p-4 flex flex-col justify-between align-center">
          <button
            aria-label="mobile-menu-btn"
            onClick={() => setNavOpen(!navOpen)}
            className="self-end bg-indigo-500/20 hover:bg-indigo-500/30 rounded-sm cursor-pointer hover:shadow-indigo-400/50 p-1 hover:shadow-xs "
          >
            <Menu />
          </button>
        </div>
        <nav
          data-isopen={navOpen}
          className="z-10 translate-0 fixed top-0 right-0 bg-zinc-900 w-full h-screen flex flex-col transistion-translate duration-300 ease-in-out data-[isopen=false]:translate-x-full"
        >
          <div className="p-4 flex justify-between align-center">
            <button onClick={() => setNavOpen(!navOpen)}>
              <Logo />
            </button>

            <button
              onClick={() => setNavOpen(!navOpen)}
              className="bg-indigo-500/20 hover:bg-indigo-500/30 rounded-sm cursor-pointer hover:shadow-indigo-400/50 p-2 hover:shadow-xs "
            >
              <X size={20} />
            </button>
          </div>
          <ul className="flex flex-col flex-1 p-2">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  onClick={() => setNavOpen(false)}
                  className="block py-3 px-2 hover:bg-zinc-800 rounded-md"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex p-4 flex-col gap-2">
            <Link
              onClick={() => setNavOpen(false)}
              className="primary-btn"
              to={"/signin"}
            >
              Sign in
            </Link>
            <Link
              onClick={() => setNavOpen(false)}
              className="secondary-btn"
              to={"/signup"}
            >
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
