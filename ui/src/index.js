import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./routes/error-page";

// Views
import MainView from "./components/views/main/view";
import TourneyView from "./components/views/tourney/view";
import ChampionsView from "./components/views/champions/champions";
import CompetitionView from "./components/views/competitions/view";
import PlayersView from "./components/views/players/view";
import LeaderBoardView from "./components/views/leaderboard/view";
import RulesView from "./components/views/rules/view";
import FormatView from "./components/views/format/view";
import StatsView from "./components/views/stats/view";

const navbarItems = [
  { name: "Home", link: "/" },
  { name: "Schedule", link: "/schedule" },
  { name: "Competitions", link: "/competition" },
  { name: "Players", link: "/players" },
  { name: "Champions", link: "/champions" },
  { name: "LeaderBoard", link: "/leaderboard" },
  { name: "Rules", link: "/rules" },
  { name: "Format", link: "/format" },
  { name: "Stats", link: "/stats" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App navbarItems={navbarItems} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainView />,
      },
      {
        path: "/champions",
        element: <ChampionsView />,
      },
      {
        path: "/competition",
        element: <CompetitionView />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoardView />,
      },
      {
        path: "/players",
        element: <PlayersView />,
      },
      {
        path: "/schedule",
        element: <TourneyView />,
      },
      {
        path: "/rules",
        element: <RulesView />,
      },
      {
        path: "/format",
        element: <FormatView />,
      },
      {
        path: "/stats",
        element: <StatsView />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
