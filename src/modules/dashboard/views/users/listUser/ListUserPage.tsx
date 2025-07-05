import { useEffect } from "react";
import { useUserContext } from "../../../../../context/User/useUserContext";
import HigherTitle from "../../../components/HigherTitle";
import UsersList from "./components/UsersList";

const ListUserPage = () => {
  const {GETUSERS} = useUserContext();
  const loc = {
    tittle: "Todos Los Usuarios",
    locs: [
      { name: "Inicio" },
      { name: "Usuarios" },
      { name: "Todos Los Usuarios" },
    ],
  };


  useEffect(() => {
    GETUSERS();
  }, []);

  return (
    <main className="flex flex-col bg-gray-200 p-4  h-full overflow-y-auto md:overflow-y-hidden">
      {/* //!encabezado */}
      <header className="flex justify-between items-center">
        <HigherTitle loc={loc} />

        <div className="flex bg-gray-400 rounded-3xl"></div>
      </header>

      {/* //!Render */}
      <div className="flex flex-1 md:flex-col ">
        <UsersList />
      </div>

    </main>
  );
};

export default ListUserPage;

/**
  
 */
