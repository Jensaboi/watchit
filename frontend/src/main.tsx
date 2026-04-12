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
import DetailsLayout from "./layout/DetailsLayout.tsx";
import MediaCastPage from "./pages/MediaCastPage.tsx";
import TvSeasonsPage from "./pages/TvSeasonsPage.tsx";
import NotFound from "./components/NotFound.tsx";
import GroupsPage from "./pages/GroupsPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

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
          { path: "/movie", element: <MediaPage media={"movie"} /> },
          { path: "/tv", element: <MediaPage media={"tv"} /> },
          {
            path: "/:media/:id",
            loader: detailsLoader,
            element: <MediaDetailsPage />,
          },
          {
            Component: DetailsLayout,
            children: [
              { path: "/:media/:id/cast", element: <MediaCastPage /> },
              { path: "/tv/:id/seasons", element: <TvSeasonsPage /> },
            ],
          },
          {
            path: "/groups",
            element: (
              <ProtectedRoute>
                <GroupsPage />
              </ProtectedRoute>
            ),
          },
          { path: "*", element: <NotFound /> },
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
