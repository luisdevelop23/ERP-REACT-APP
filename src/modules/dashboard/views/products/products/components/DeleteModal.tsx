import "animate.css";
import { useState } from "react";
import ProductIF from "../../../../../../interface/product.interface";
import { useProductContext } from "../../../../../../context/Product/useProductContext";

interface Props {
  item: ProductIF;
  close: (value: null) => void;
}

const DeleteModal: React.FC<Props> = ({ item, close }) => {
  const { REMOVEP } = useProductContext();
  const [animateValue, setAnimateValue] = useState<string>(
    "animate__fadeInUpBig"
  );

  const handleDelete = async () => {
    const value = await REMOVEP(item.cod_product as string);
    if (value === true) {
      close(null);
    }
  };

  const handleClose = () => {
    setAnimateValue("animate__fadeOutUpBig");
    setTimeout(() => {
      close(null);
    }, 750);
  };

  return (
    <div className="fixed inset-0  bg-black/30 flex justify-center items-center z-[999]">
      <div
        className={`relative bg-white rounded-2xl p-6 max-w-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in scale-95 animate-in fade-in transition-all duration-300 ease-out animate__animated  animate__faster ${animateValue}`}
      >
        <h1 className="text-2xl font-semibold text-center">
          ¿Seguro que deseas Eliminar?{" "}
        </h1>
        <div className="flex items-center justify-center gap-x-10 text-lg py-3">
          <p className="text-center text-gray-500">
            {" "}
            <span className="font-semibold">Codigo:</span> {item.cod_product}{" "}
          </p>
          <p className="text-center text-gray-500">
            {" "}
            <span className="font-semibold">Nombre:</span> {item.name}{" "}
          </p>
        </div>
        <div className="flex justify-center gap-x-10 py-3">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Eliminar
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
