import { useRoutes } from "react-router-dom";
import routes from "./common/utils/routes";
import Sidebar from "./common/components/Sidebar/Sidebar";

function App() {
  const routing = useRoutes(routes);
  return (
    <main className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>{routing}</h1>
      </div>
    </main>
  );
}

export default App;
