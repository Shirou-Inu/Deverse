import { type RouteObject } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Template from "../../pages/Template/Template";

export const basePath = "/Deverse";

const routes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
  { path: basePath + "/", element: <Home /> },
  { path: basePath + "/about", element: <About /> },
  { path: basePath + "/template", element: <Template /> },
];

export default routes;
