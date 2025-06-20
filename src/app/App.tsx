import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/Auth/useAuthContext";
import Login from "../modules/auth/Login";
import Dashboard from "../modules/dashboard/Dashboard";
import "./App.css";
import ProtectedRoute from "../hooks/PrivateRoute";

function App() {
  const { login, verify } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/login"
          element={login && verify ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Rutas protegidas */}
        <Route
          element={
            <ProtectedRoute
              canActivate={login && verify}
              redirectPath="/login"
            />
          }
        >
          {/* Aquí van todas las rutas que quieres proteger */}
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>

        {/* Redirección por defecto */}
        <Route
          path="*"
          element={<Navigate to={login ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
