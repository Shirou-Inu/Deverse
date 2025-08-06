import { useRoutes } from "react-router-dom"
import routes from "./common/utils/routes"

function App() {
    const routing = useRoutes(routes)
    return (
        <div>
            <div>
                {routing}
            </div>
        </div>
    )
}

export default App