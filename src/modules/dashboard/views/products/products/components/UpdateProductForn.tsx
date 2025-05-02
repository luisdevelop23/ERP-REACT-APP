import "animate.css";
import React, { useEffect, useState } from "react";
import ProductIF from "../../../../../../interface/product.interface";
import { validateProductForm } from "../../../../../../utils/validationHelpers";
import { useProductContext } from "../../../../../../context/Product/useProductContext";
import { Bounce, toast } from "react-toastify";
interface Props {
  item: ProductIF;
  close: (value: null) => void;
}

const UpdateProductForm: React.FC<Props> = ({ item, close }) => {
  const { UPDATEP, FETCHP } = useProductContext();
  const [animateValue, setAnimateValue] = useState("animate__fadeInRight");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [updateProduct, setUpdateProduct] = useState<ProductIF>();

  const handleClose = () => {
    setAnimateValue("animate__fadeOutRight");
    setTimeout(() => {
      close(null);
    }, 500);
  };

  const handleValidate = () => {
    const errors: string[] = validateProductForm(updateProduct as ProductIF);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "purchase_price" || name === "sale_price") {
      setUpdateProduct({
        ...updateProduct,
        [name]: Number(value),
      } as ProductIF);
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      } as ProductIF);
    }
  };
  const handleSubmit = async () => {
    if (!handleValidate()) return;
    console.log("Producto actualizado:", updateProduct);
    const value: boolean = await UPDATEP(updateProduct as ProductIF);
    if (value === false) return;
    handleClose();
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let id = item.cod_product as string;
        setLoading(true);
        const response: boolean | ProductIF = await FETCHP(id);
        if (response) {
          setUpdateProduct(response as ProductIF);
          setLoading(false);
        }else{
          toast.error('Error al obtener el producto', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          close(null);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0  bg-black/30 flex justify-center items-center z-[999]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

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
                name="cod_product"
                value={updateProduct?.cod_product as string}
                onChange={handleChange}
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
                name="name"
                value={updateProduct?.name as string}
                onChange={handleChange}
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
                name="model"
                value={updateProduct?.model as string}
                onChange={handleChange}
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
                name="brand"
                value={updateProduct?.brand as string}
                onChange={handleChange}
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
                name="colors"
                value={updateProduct?.colors as string}
                onChange={handleChange}
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
                name="liters"
                value={updateProduct?.liters as string}
                onChange={handleChange}
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
                name="km"
                value={updateProduct?.km as string}
                onChange={handleChange}
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
                name="engine"
                value={updateProduct?.engine as string}
                onChange={handleChange}
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
                name="description"
                value={updateProduct?.description as string}
                onChange={handleChange as any}
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
                name="weight"
                value={updateProduct?.weight as string}
                onChange={handleChange}
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
                name="tires"
                value={updateProduct?.tires as string}
                onChange={handleChange}
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
                name="purchase_price"
                value={updateProduct?.purchase_price as number}
                onChange={handleChange}
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
                name="sale_price"
                value={updateProduct?.sale_price as number}
                onChange={handleChange}
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
            Actualizar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductForm;
