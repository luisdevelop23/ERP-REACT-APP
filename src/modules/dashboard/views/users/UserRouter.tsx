import { Navigate, Route, Routes } from "react-router-dom";
import ListUserPage from "./listUser/ListUserPage";
import SessionsPage from "./sessions/SessionsPage";

const UserRouter = () => {
  return (
    <Routes>
      {/* Ruta índice para /dashboard/user */}
      <Route index element={<Navigate to="users" replace />} />

      {/* Hijos anidados */}
      <Route path="lista_usuarios" element={<ListUserPage />} />
      <Route path="sesiones" element={<SessionsPage />} />
    </Routes>
  );
};

export default UserRouter;
