import { Navigate, Route, Routes } from "react-router-dom";
import ListUserPage from "./listUser/ListUserPage";
import SessionsPage from "./sessions/SessionsPage";

const UserRouter = () => {
  return (
    <Routes>
      {/* Ruta índice para /dashboard/user */}
      <Route index element={<Navigate to="users" replace />} />

      {/* Hijos anidados */}
      <Route path="users" element={<ListUserPage />} />
      <Route path="sessions" element={<SessionsPage />} />
    </Routes>
  );
};

export default UserRouter;
