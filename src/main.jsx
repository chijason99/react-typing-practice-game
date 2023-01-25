import React from "react";
import ReactDOM from "react-dom/client";
import Root from "../src/routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Game from "./routes/Game";
import Tutorial from "./routes/Tutorial";
import Leaderboard from './routes/Leaderboard'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/tutorial",
        element: <Tutorial />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/play",
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
