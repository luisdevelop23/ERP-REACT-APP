import { useEffect } from "react";
import { useProductContext } from "../../../../../context/Product/useProductContext";
import HigherTitle from "../../../components/HigherTitle";
import ProductsList from "./components/ProductsList";

const ProductPage = () => {
  const { GETP, code } = useProductContext();

  // const [options, setOption] = useState<string>("list");
  const loc = {
    tittle: "Todos Los Productos",
    locs: [{ name: "Inicio" }, { name: "Productos" }, { name: "Todos Los Productos" }],
  };

  // const handleOption = (option: string) => {
  //   setOption(option);
  // };

  // const renderOPtion = () => {
  //   switch (options) {
  //     case "list":
  //       return <ProductsList />;
  //     // case "grid":
  //     //   return <ProductsGrid />;
  //     default:
  //       return <ProductsList />;
  //   }
  // };

  useEffect(() => {
    GETP();
  }, [code]);

  return (
    <main className="flex flex-col bg-gray-200 p-4  h-full overflow-y-auto md:overflow-y-hidden">
      {/* //!encabezado */}
      <header className="flex justify-between items-center">
        <HigherTitle loc={loc} />

      </header>

      {/* //!Render */}
      {/* <div className="flex flex-1 md:flex-col ">{renderOPtion()}</div> */}
      {/* <ProductCardGrid /> */}
      {/* <NewProduct /> */}
      <ProductsList />;
    </main>
  );
};

export default ProductPage;
