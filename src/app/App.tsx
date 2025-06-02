import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/Auth/useAuthContext";
import Login from "../modules/auth/Login";
import Dashboard from "../modules/dashboard/Dashboard";
import "./App.css";

function App() {
  const { login, verify } = useAuthContext();
  console.log(login, verify);

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/login"
          element={login && verify ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Ruta protegida - solo accesible si el usuario está autenticado */}
        <Route
          path="/dashboard/*"
          element={verify ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* Redirección por defecto (redirigir al login si no hay ruta coincidente) */}
        <Route
          path="*"
          element={<Navigate to={login ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
