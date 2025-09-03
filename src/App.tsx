import { useState } from "react";
import { useLocation, useRoutes, type RouteObject } from "react-router-dom";
import Sidebar from "./common/components/Sidebar/Sidebar";
import { useEffect } from "react";
import generateRoutes from "./common/utils/routes";

function App() {
  const [routes, setRoutes] = useState<RouteObject[]>([]);
  const location = useLocation();

  useEffect(() => {
    generateRoutes().then(setRoutes);
  }, []);

  useEffect(() => {
    const routingDiv = document.querySelector(".routing-div");
    if (routingDiv) {
      routingDiv.scrollTop = 0;
    }
  }, [location]);

  const routing = useRoutes(routes);
  return (
    <main className="flex max-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="routing-div overflow-y-auto flex-1">{routing}</div>
    </main>
  );
}

export default App;
