import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        Component: MainLayout,
        children: [{ path: "/", element: <HomePage /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
