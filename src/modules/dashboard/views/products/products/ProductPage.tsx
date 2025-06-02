import { Icon } from "@iconify/react/dist/iconify.js";
import HigherTitle from "../../../components/HigherTitle";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";
import ProductsGrid from "./components/ProductGrid";
import { useProductContext } from "../../../../../context/Product/useProductContext";

const ProductPage = () => {
  const { GETP } = useProductContext();

  const [options, setOption] = useState<string>("list");
  const loc = {
    tittle: "Todos Los Productos",
    locs: [{ name: "Home" }, { name: "All Products" }],
  };

  const handleOption = (option: string) => {
    setOption(option);
  };

  const renderOPtion = () => {
    switch (options) {
      case "list":
        return <ProductsList />;
      case "grid":
        return <ProductsGrid />;
      default:
        return <ProductsList />;
    }
  };

  useEffect(() => {
    GETP();
  }, []);

  return (
    <main className="flex flex-col bg-gray-200 p-4  h-full overflow-y-auto md:overflow-y-hidden">
      {/* //!encabezado */}
      <header className="flex justify-between items-center">
        <HigherTitle loc={loc} />

        <div className="flex bg-gray-400 rounded-3xl">
          <button
            onClick={() => handleOption("list")}
            className={`px-6 py-4   rounded-l-3xl  ${
              options === "list"
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-gray-200"
            }`}
          >
            <Icon icon="ci:rows" className=" size-6" />
          </button>
          <button
            onClick={() => handleOption("grid")}
            className={`px-6 py-4   rounded-r-3xl  ${
              options === "grid"
                ? "bg-blue-500 text-white"
                : "bg-gray-400 text-gray-200"
            }`}
          >
            <Icon icon="akar-icons:grid" className="text-white size-6" />
          </button>
        </div>
      </header>

      {/* //!Render */}
      <div className="flex flex-1 md:flex-col ">{renderOPtion()}</div>
      {/* <ProductCardGrid /> */}
      {/* <NewProduct /> */}
    </main>
  );
};

export default ProductPage;
