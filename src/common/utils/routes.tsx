import React from "react";
import { type RouteObject } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Template from "../../pages/Template/Template";
import { loadAllProjectMeta } from "./loadProjects";

export const basePath = "/Deverse";

const staticRoutes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
  { path: basePath + "/", element: <Home /> },
  { path: basePath + "/about", element: <About /> },
  { path: basePath + "/template", element: <Template /> },
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

  console.log([...staticRoutes, ...projectRoutes]);

  return [...staticRoutes, ...projectRoutes];
}

export default generateRoutes;
