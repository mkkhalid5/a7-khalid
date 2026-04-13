import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";


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
    ]
  },
  
])
