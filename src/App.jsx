import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { AuthLayout } from "./components/Layout/AuthLayout"
import { Login } from "./components/Pages/Login"
// BrowserRouter es como el abuela de las rutas, el Routes es el hijo y el Route es el nieto
// En react los componentes se manejan como si fueran etiquetas html

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}></Route>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
