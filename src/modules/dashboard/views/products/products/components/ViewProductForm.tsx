import "animate.css";
import React, { useState } from "react";
import ProductIF from "../../../../../../interface/product.interface";
interface Props {
  item: ProductIF;
  close: (value: null | string ) => void;
}

const ViewProductForm: React.FC<Props> = ({ item, close }) => {
  const [animateValue, setAnimateValue] = useState("animate__fadeInRight");
  const [form] = useState<ProductIF>(item);

  const handleClose = () => {
    setAnimateValue("animate__fadeOutRight");
    setTimeout(() => {
      close("");
    }, 750);
  };

  return (
    <div className="fixed inset-0  bg-black/30 flex justify-end items-center z-[999]">
      <div
        className={`relative bg-white p-6 max-w-3xl w-full h-screen shadow-2xl overflow-y-auto max-h-[100vh] animate__animated  animate__faster ${animateValue} `}
      >
        <div className="border-b-2 border-gray-200 py-1">
          <h1 className="font-semibold text-gray-800 text-xl">Ver Product</h1>
        </div>
        <div className=" mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="mt-4 col-span-4">
              <h1 className="text-black text-lg font-semibold">
                Informacion del Producto
              </h1>
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Código Producto
              </label>
              <input
                type="text"
                value={form.cod_product || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Nombre
              </label>
              <input
                type="text"
                value={form.name || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Modelo
              </label>
              <input
                type="text"
                value={form.model || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Marca
              </label>
              <input
                type="text"
                value={form.brand || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Colores
              </label>
              <input
                type="text"
                value={form.colors || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Litros
              </label>
              <input
                type="text"
                value={form.liters || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Kilometros
              </label>
              <input
                type="text"
                value={form.km || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Motor
              </label>
              <input
                type="text"
                value={form.engine || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-4">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Descripcion
              </label>
              <textarea
                value={form.description || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded w-full h-32 resize-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Peso
              </label>
              <input
                type="text"
                value={form.weight || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Llantas
              </label>
              <input
                type="text"
                value={form.tires || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Precio de Compra
              </label>
              <input
                type="number"
                value={form.purchase_price || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Precio de Venta
              </label>
              <input
                type="number"
                value={form.sale_price || ""}
                disabled
                className="shadow appearance-none border-1 border-gray-300 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        {/* //*Boton de guardar */}
        <div className="flex justify-between mt-4 ">
          <button
            className="text-black hover:bg-gray-200  border border-gray-400  font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out flex items-center gap-2"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProductForm;
