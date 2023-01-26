import axios from "axios"
import AppRoutes from "./routes"

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return <AppRoutes />
}

export default App
