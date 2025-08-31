import React from "react";
import { type RouteObject } from "react-router-dom";
import { loadAllProjectMeta } from "./loadProjects";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";

export const basePath = "/Deverse";

const staticRoutes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
  { path: basePath + "/", element: <Home /> },
  { path: basePath + "/projects", element: <Projects /> },
  { path: basePath + "/about", element: <About /> },
];

async function generateRoutes(): Promise<RouteObject[]> {
  const metas = await loadAllProjectMeta();

  const projectRoutes: RouteObject[] = metas
    .filter((meta) => meta.active)
    .map((meta) => ({
      path: basePath + meta.url,
      element: React.createElement(
        React.lazy(() => import(`../../projects/${meta.name}/${meta.name}.tsx`))
      ),
    }));

  return [...staticRoutes, ...projectRoutes];
}

export default generateRoutes;
