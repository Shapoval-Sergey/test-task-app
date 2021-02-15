import { lazy } from "react";

const routes = [
  {
    path: "/actions",
    label: "Shared",
    exact: true,
    component: lazy(() => import("./views/PageLoaded/PageLoaded.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/final",
    label: "Final",
    exact: true,
    component: lazy(() => import("./views/FinalPage/FinalPage")),
    private: true,
    restricted: false,
  },
];

export default routes;
