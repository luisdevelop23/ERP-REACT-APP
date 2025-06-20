import { Icon } from "@iconify/react/dist/iconify.js"
import { getUsers } from "../../../../../../services/user/user.service";

const UsersList = () => {

    const handleSelect = async () => {
        const response = await getUsers();
            console.log(response)
      };


  return (
    <div className="relative p-4 bg-white rounded-xl shadow-md">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2">
      <h1 className="text-lg text-gray-800 font-bold mb-4 sm:mb-0">
        Listado de Productos
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
          onClick={() => handleSelect()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 sm:mt-0"
        >
          Agregar Producto
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
      </table>
    </div>
  </div>
  )
}

export default UsersList