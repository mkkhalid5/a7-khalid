import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/timeline",
        element: <TimeLine />
      },
       {
        path: "/stats",
        element: <Stats />
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
      }
    ],
    errorElement: <ErrorPage />
  },
])
