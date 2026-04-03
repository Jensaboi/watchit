import { Link, Outlet } from "react-router";
import { X } from "lucide-react";
import Logo from "../assets/Logo";

const navItems = [
  { name: "Movies", path: "/movie" },
  { name: "Shows", path: "/tv" },
  { name: "Login", path: "/login" },
];

export default function MainLayout() {
  return (
    <div className="h-screen w-full flex flex-col">
      <header>
        <nav className="translate-0 p-4 absolute right-0 bg-zinc-800 w-full h-screen flex flex-col">
          <div className="py-4 flex justify-between align-center">
            <Logo />

            <button className="border-indigo-400 border-2 rounded-sm cursor-pointer hover:shadow-indigo-400 p-1 hover:shadow-xs ">
              <X size={20} />
            </button>
          </div>
          <ul className="flex flex-col">
            {navItems.map(item => (
              <li>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col">
            <Link to={"/signin"}>Sign in</Link>
            <Link to={"/signup"}>Sign up</Link>
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
