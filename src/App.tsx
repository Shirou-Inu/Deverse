import { useState } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";
import Sidebar from "./common/components/Sidebar/Sidebar";
import { useEffect } from "react";
import generateRoutes from "./common/utils/routes";

function App() {
  const [routes, setRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    generateRoutes().then(setRoutes);
  }, []);

  const routing = useRoutes(routes);
  return (
    <main className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <h1>{routing}</h1>
      </div>
    </main>
  );
}

export default App;
