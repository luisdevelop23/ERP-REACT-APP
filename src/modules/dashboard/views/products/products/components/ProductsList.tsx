import { Icon } from "@iconify/react";
import { useState } from "react";
import { useProductContext } from "../../../../../../context/Product/useProductContext";
import ProductIF from "../../../../../../interface/product.interface";
import CreateProductForm from "./CreateProductForm";
import DeleteModal from "./DeleteModal";
import UpdateProductForm from "./UpdateProductForn";
import ViewProductForm from "./ViewProductForm";

const ProductsList = () => {
  const { products, pages, currentPage, setCurrentPage } = useProductContext();
  const [selected, setSelected] = useState<ProductIF | null>(null);
  const [options, setOptions] = useState<ProductIF | null>(null);
  const [modal, setModal] = useState<string | null>("");

  const handleSelect = (modal: string, item: ProductIF): void => {
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

  const renderModal = () => {
    switch (modal) {
      case "view":
        return selected && <ViewProductForm item={selected} close={setModal} />;
      case "update":
        return (
          selected && <UpdateProductForm item={selected} close={setModal} />
        );
      case "create":
        return <CreateProductForm close={setModal} />;
      case "delete":
        return selected && <DeleteModal item={selected} close={setModal} />;
      default:
        return null;
    }
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
        onClick={() => handleSelect("create", {} as ProductIF)}
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
          <th className="px-4 py-2 text-left">Código</th>
          <th className="px-4 py-2 text-left">Nombre</th>
          <th className="px-4 py-2 text-left">Marca</th>
          <th className="px-4 py-2 text-left">Modelo</th>
          <th className="px-4 py-2 text-left">Motor</th>
          <th className="px-4 py-2 text-left">Precio Compra</th>
          <th className="px-4 py-2 text-left">Precio Venta</th>
          <th className="px-4 py-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody className="max-h-[500px] sm:max-h-none overflow-y-auto">
        {products?.length === 0 ? (
          <tr>
            <td colSpan={8} className="text-center py-4 text-gray-500">
              No hay productos disponibles.
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr
              key={product.id_product}
              className="bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700 border-b-2 border-gray-200"
            >
              <td className="px-4 py-2">{product.cod_product}</td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.brand}</td>
              <td className="px-4 py-2">{product.model}</td>
              <td className="px-4 py-2">{product.engine}</td>
              <td className="px-4 py-2 font-semibold text-green-600">
                ${product.purchase_price}
              </td>
              <td className="px-4 py-2 font-semibold text-green-600">
                ${product.sale_price}
              </td>
              <td className="px-4 py-2 relative">
                <button onClick={() => setOptions(product)}>
                  <Icon
                    icon="iwwa:option-horizontal"
                    className="text-xl text-gray-700 hover:text-blue-600"
                  />
                </button>

                {/* Dropdown */}
                {options === product && (
                  <div className="absolute top-5 right-4 bg-white border border-gray-200 rounded-md shadow-md z-10">
                    <ul className="text-sm font-medium text-gray-700 space-y-1 px-3">
                      <li
                        onClick={() => handleSelect("view", product)}
                        className="cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        ver
                      </li>
                      <li
                        onClick={() => handleSelect("update", product)}
                        className="cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        editar
                      </li>
                      <li
                        onClick={() => handleSelect("delete", product)}
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

  {/* //!Botones de navegación */}
  {pages > 1 && (
    <div>
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              currentPage > 1 && setCurrentPage(currentPage - 1)
            }
            className="px-3 cursor-pointer py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Anterior
          </button>
          {[...Array(pages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-3 py-1 text-sm font-medium  border border-gray-300 rounded-md hover:bg-gray-50 ${
                currentPage === page + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() =>
              currentPage < pages && setCurrentPage(currentPage + 1)
            }
            className="px-3 py-1 text-sm  cursor-pointer font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )}
        {/* Renderizar el modal según el estado */}
        {renderModal()}
</div>

  );
};

export default ProductsList;
