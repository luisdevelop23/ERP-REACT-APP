import { Icon } from "@iconify/react/dist/iconify.js";
import { getUsers } from "../../../../../../services/user/user.service";
import { useState } from "react";
import { UserIF } from "../../../../../../interface/user.interface";
import { useUserContext } from "../../../../../../context/User/useUserContext";

const UsersList = () => {
  const { UsersList } = useUserContext();
  const [selected, setSelected] = useState<UserIF | null>(null);
  const [options, setOptions] = useState<UserIF | null>(null);
  const [modal, setModal] = useState<string | null>("");

  const handleSelect = (modal: string, item: UserIF): void => {
    switch (modal) {
      case "view":
        setOptions(null);
        setSelected(item);
        setModal("view");
        break;
      case "create":
        setModal("create");
        break;
      case "update":
        setOptions(null);
        setSelected(item);
        setModal("update");
        break;
      case "delete":
        setOptions(null);
        setSelected(item);
        setModal("delete");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative p-4 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
        <h1 className="text-lg text-gray-800 font-bold mb-4 sm:mb-0">
          Listado de Usuarios
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-2">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Buscar producto..."
              className="w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Icon
              icon="material-symbols:search"
              className="absolute right-3 top-2.5 text-gray-400 text-xl"
            />
          </div>
          <button
            // onClick={() => handleSelect()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 sm:mt-0"
          >
            Crear nuevo Usuario
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto sm:overflow-visible">
        <table className="min-w-full table-auto border-spacing-y-2">
          <thead className="border-b-2 border-gray-300">
            <tr className="text-xs sm:text-sm font-semibold text-gray-600 text-nowrap">
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Apellidos</th>
              <th className="px-4 py-2 text-left">DNI</th>
              <th className="px-4 py-2 text-left">Usuario</th>
              <th className="px-4 py-2 text-left">Correo</th>
              <th className="px-4 py-2 text-left">Acciones</th>
            </tr>
          </thead>

          <tbody className="max-h-[500px] sm:max-h-none overflow-y-auto">
            {UsersList?.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No hay productos disponibles.
                </td>
              </tr>
            ) : (
              UsersList.map((user) => (
                <tr
                  key={user.dni}
                  className="bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700 border-b-2 border-gray-200"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.surnames}</td>
                  <td className="px-4 py-2">{user.dni}</td>
                  <td className="px-4 py-2">{user.user_name}</td>
                  <td className="px-4 py-2">{user.email}</td>

                  <td className="px-4 py-2 relative">
                    <button
                     onClick={() => setOptions(user)}
                    >
                      <Icon
                        icon="iwwa:option-horizontal"
                        className="text-xl text-gray-700 hover:text-blue-600"
                      />
                    </button>

                    {/* Dropdown */}
                    {options === user && (
                      <div className="absolute  bg-white border border-gray-200 rounded-md shadow-md z-10">
                        <ul className="text-sm font-medium text-gray-700 space-y-1 px-3">
                          <li
                            onClick={() => handleSelect("view", user)}
                            className="cursor-pointer hover:text-blue-600 transition-colors"
                          >
                            ver
                          </li>
                          <li
                            onClick={() => handleSelect("update", user)}
                            className="cursor-pointer hover:text-blue-600 transition-colors"
                          >
                            editar
                          </li>
                          <li
                            onClick={() => handleSelect("delete", user)}
                            className="cursor-pointer hover:text-blue-600 transition-colors"
                          >
                            eliminar
                          </li>
                          <li
                            className="cursor-pointer hover:text-red-600 transition-colors"
                            onClick={() => setOptions(null)}
                          >
                            Cerrar
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
