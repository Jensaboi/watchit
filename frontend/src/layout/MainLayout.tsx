import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="wrapper">
      <header></header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}
