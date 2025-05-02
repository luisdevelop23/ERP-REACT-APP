import "animate.css";
import React, { useState } from "react";
import { useProductContext } from "../../../../../../context/Product/useProductContext";
import ProductIF from "../../../../../../interface/product.interface";
import { validateProductForm } from "../../../../../../utils/validationHelpers";
interface Props {
  close: (value: null) => void;
}

const CreateProductForm: React.FC<Props> = ({ close }) => {
  const { CREATEP, code } = useProductContext();
  const [animateValue, setAnimateValue] = useState("animate__fadeInRight");
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<ProductIF>({
    id_product: "",
    cod_product: "",
    name: "",
    model: "",
    brand: "",
    colors: "",
    liters: "",
    km: "",
    engine: "",
    description: "",
    weight: "",
    tires: "",
    purchase_price: 0,
    sale_price: null,
    status: true,
    user: {
      id_user: "1f5c4aec-e18d-411b-bb87-5f875f790c0d",
    },
  });

  const handleClose = () => {
    setAnimateValue("animate__fadeOutRight");
    setTimeout(() => {
      close(null);
    }, 750);
  };

  const handleValidate = () => {
    const errors: string[] = validateProductForm(form as ProductIF);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    console.log("Producto creado:", form);
    if (!handleValidate()) return;
    const value: boolean = await CREATEP(form as ProductIF);
    if (value === false) return;
    handleClose();
  };


  return (
    <div className="fixed inset-0  bg-black/30 flex justify-end items-center z-[999]">
      <div
        className={`relative bg-white p-6 max-w-3xl w-full h-screen shadow-2xl overflow-y-auto max-h-[100vh] animate__animated  animate__faster ${animateValue} `}
      >
        <div className="border-b-2 border-gray-200 py-2">
          <h1 className="font-semibold text-gray-800 text-xl">Nuevo Product</h1>
        </div>
        <div className=" mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="mt-4 col-span-4">
              <h1 className="text-black text-lg font-semibold">
                Informacion del Producto
              </h1>
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Código Producto
              </label>
              <input
                type="text"
                value={code || ""}
                onChange={(e) =>
                  setForm({ ...form, cod_product: e.target.value })
                }
                disabled
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Nombre
              </label>
              <input
                type="text"
                value={form.name || ""}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("name") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Modelo
              </label>
              <input
                type="text"
                value={form.model || ""}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("model") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Marca
              </label>
              <input
                type="text"
                value={form.brand || ""}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("brand") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Colores
              </label>
              <input
                type="text"
                value={form.colors || ""}
                onChange={(e) => setForm({ ...form, colors: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("colors") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Litros
              </label>
              <input
                type="text"
                value={form.liters || ""}
                onChange={(e) => setForm({ ...form, liters: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("liters") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Kilometros
              </label>
              <input
                type="text"
                value={form.km || ""}
                onChange={(e) => setForm({ ...form, km: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("km") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Motor
              </label>
              <input
                type="text"
                value={form.engine || ""}
                onChange={(e) => setForm({ ...form, engine: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("engine") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-4">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Descripcion
              </label>
              <textarea
                value={form.description || ""}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className={`shadow appearance-none border-1  rounded w-full h-32 resize-none py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("description") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Peso
              </label>
              <input
                type="text"
                value={form.weight || ""}
                onChange={(e) => setForm({ ...form, weight: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Llantas
              </label>
              <input
                type="text"
                value={form.tires || ""}
                onChange={(e) => setForm({ ...form, tires: e.target.value })}
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("tires") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Precio de Compra
              </label>
              <input
                type="number"
                value={form.purchase_price || ""}
                onChange={(e) =>
                  setForm({ ...form, purchase_price: Number(e.target.value) })
                }
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("purchase_price") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
            <div className="mb-3 col-span-2">
              <label className="block  pb-1 text-gray-500 text-sm font-bold ">
                Precio de Venta
              </label>
              <input
                type="number"
                value={form.sale_price || ""}
                onChange={(e) =>
                  setForm({ ...form, sale_price: Number(e.target.value) })
                }
                className={`shadow appearance-none border-1  rounded  w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.includes("sale_price") === true
                    ? "border-red-300"
                    : "border-gray-300"
                } `}
              />
            </div>
          </div>
        </div>
        {/* //*Boton de guardar */}
        <div className="flex justify-between mt-4 pt-4">
          <button
            className="text-black hover:bg-gray-200  border border-gray-400  font-bold py-2 px-3 rounded-lg transition duration-200 ease-in-out flex items-center gap-2 text-sm"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition duration-200 ease-in-out flex items-center gap-2 text-sm"
            onClick={handleSubmit}
          >
            Guardar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
