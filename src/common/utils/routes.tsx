import { type RouteObject } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import Home from "../../pages/Home/Home"

const routes: RouteObject[] = [
  {path: "*", element: <NotFoundPage/>},
  {path: "/", element: <Home/>},
]

export default routes