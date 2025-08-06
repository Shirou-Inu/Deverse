import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';
import Home from './pages/Home/Home.tsx';

const router = createBrowserRouter([
  {path: "*", element: <NotFoundPage />},
  {path: "/", element: <Home />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
