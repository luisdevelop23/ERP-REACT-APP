import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/Auth/useAuthContext";
import ProtectedRoute from "../hooks/PrivateRoute";
import Login from "../modules/auth/Login";
import Dashboard from "../modules/dashboard/Dashboard";
import Loadingpage from "../modules/default/Loadingpage";
import "./App.css";

function App() {
  const { login, loading } = useAuthContext();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return <Loadingpage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route
          path="/login"
          element={
            login  ? (
              <Navigate to="/panel" replace />
            ) : (
              <Login />
            )
          }
        />

        {/* Rutas protegidas */}
        <Route
          element={
            <ProtectedRoute
              canActivate={login }
              redirectPath="/login"
            />
          }
        >
          <Route path="/panel/*" element={<Dashboard />} />
        </Route>

        {/* Redirección por defecto */}
        <Route
          path="/"
          element={
            <Navigate to={login  ? "/panel" : "/login"} replace />
          }
        />
        
        {/* Catch all - cualquier ruta no definida */}
        <Route
          path="*"
          element={
            <Navigate to={login ? "/panel" : "/login"} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;