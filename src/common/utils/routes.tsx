import React from "react";
import { type RouteObject } from "react-router-dom";
import { loadAllProjectMeta } from "./loadProjects";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";

const staticRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFoundPage /> },
];

async function generateRoutes(): Promise<RouteObject[]> {
  const metas = await loadAllProjectMeta();

  const projectRoutes: RouteObject[] = metas
    .filter((meta) => meta.active)
    .map((meta) => ({
      path: meta.url,
      element: React.createElement(
        React.lazy(() => import(`../../projects/${meta.name}/${meta.name}.tsx`))
      ),
    }));

  return [...projectRoutes, ...staticRoutes];
}

export default generateRoutes;
