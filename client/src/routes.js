import { lazy } from "react";

const routes = [
  {
    path: "/actions",
    label: "PageLoaded",
    exact: true,
    component: lazy(() => import("./views/PageLoaded/PageLoaded.js")),
    private: false,
  },
  {
    path: "/final",
    label: "FinalPage",
    exact: true,
    component: lazy(() => import("./views/FinalPage/FinalPage")),
    private: true,
  },
];

export default routes;
