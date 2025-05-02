import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ProductIF from "../../../../../../interface/product.interface";
import CreateProductForm from "./CreateProductForm";
import DeleteModal from "./DeleteModal";
import UpdateProductForm from "./UpdateProductForn";
import ViewProductForm from "./ViewProductForm";
import { useProductContext } from "../../../../../../context/Product/useProductContext";

const ProductsGrid = () => {
  const { products, pages, currentPage, setCurrentPage, setAmountProducts } =
    useProductContext();
  // ? Estados
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

  useEffect(() => {
    setAmountProducts(6);
  }, []);

  return (
    <div>
      <div className="relative p-4 bg-white rounded-xl shadow-md">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-lg text-gray-800 font-bold mb-4">
            Listado de Productos
          </h1>
          <div className="flex gap-x-2">
            <div className="relative w-64">
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
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-2 rounded "
            >
              Agregar Producto
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 p-4">
          {products.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id_product}
                className="border-gray-300 border-2  rounded-2xl shadow-md p-5 flex flex-col gap-4"
              >
                {/* Header con ícono y título */}
                <div className="flex items-center gap-3 relative">
                  <div>
                    <h2 className="font-bold text-gray-800 text-lg">
                      {product.name}
                    </h2>
                  </div>
                  {/* //?Botón de opciones */}
                  <button
                    onClick={() => setOptions(product)}
                    className="absolute top-0 right-0"
                  >
                    <Icon
                      icon="iwwa:option-horizontal"
                      className="text-xl text-gray-700 hover:text-blue-600"
                    />
                  </button>
                  {/* //todo Menu */}
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
                </div>

                {/* Info del producto */}
                <div className="text-sm text-gray-700 grid gap-1">
                  <p>
                    <strong>Código:</strong> {product.cod_product}
                  </p>
                  <p>
                    <strong>Marca:</strong> {product.brand}
                  </p>
                  <p>
                    <strong>Modelo:</strong> {product.model}
                  </p>
                  <p>
                    <strong>Motor:</strong> {product.engine}
                  </p>
                  <p>
                    <strong>Precio Compra:</strong> ${product.purchase_price}
                  </p>
                  <p>
                    <strong>Precio Venta:</strong> ${product.sale_price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* //!Botones de navegacion */}
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

export default ProductsGrid;
