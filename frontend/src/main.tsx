import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { loader as appLoader } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import MediaPage from "./pages/MediaPage.tsx";
import MediaDetailsPage, {
  loader as detailsLoader,
} from "./pages/MediaDetailsPage.tsx";

const router = createBrowserRouter([
  {
    Component: App,
    id: "app",
    loader: appLoader,
    children: [
      {
        Component: MainLayout,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/signin", element: <SignInPage /> },
          { path: "/signup", element: <SignUpPage /> },
          { path: "/:media", element: <MediaPage /> },
          {
            path: "/:media/:id",
            loader: detailsLoader,
            element: <MediaDetailsPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
