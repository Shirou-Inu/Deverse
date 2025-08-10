import { type RouteObject } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Template from "../../pages/Template/Template";

const routes: RouteObject[] = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/template", element: <Template /> },
];

export default routes;
