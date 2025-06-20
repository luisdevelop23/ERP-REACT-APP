import { createContext, ReactNode, useEffect, useState } from "react";
import ProductIF from "../../interface/product.interface";
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  getNewCod,
  getProducts,
  updateProduct,
} from "../../services/product/product.service";
import { Bounce, toast } from "react-toastify";

//? Definir el tipo para el contexto
interface ProductContextType {
  products: ProductIF[];
  loading: boolean;
  code: string;
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  amountProducts: number;
  setAmountProducts: (amount: number) => void;
  GETP: () => void;
  CREATEP: (product: ProductIF) => Promise<boolean>;
  FETCHP: (id: string) => Promise<boolean> | Promise<ProductIF>;
  UPDATEP: (product: ProductIF) => Promise<boolean>;
  REMOVEP: (id: string) => Promise<boolean>;
}

//? Crear el contexto
const ProductContext = createContext<ProductContextType | undefined>(undefined);

//? Definir el ProductProvider
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [code, setcode] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [amountProducts, setAmountProducts] = useState<number>(12);
  const [products, setProducts] = useState<ProductIF[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const GETP = async () => {
    try {
      setLoading(true);
      const cod = await getNewCod();
      const response = await getProducts(currentPage, amountProducts);
      if(response.result === false){
        return
      }
      setProducts(response.data);
      if(cod.data !== code){
          console.log(cod.data);
        setcode(cod.data);
      }
      if (response.pages !== pages && response.pages !== 0) {
        setPages(response.pages);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  const FETCHP = async (id: string): Promise<boolean | ProductIF> => {
    try {
      const response = await fetchProduct(id);
      if (response?.result) {
        return response.data as ProductIF;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  const CREATEP = async (product: ProductIF): Promise<boolean> => {
    try {
      const response = await toast.promise(
        createProduct(product),
        {
          pending: "Creando producto",
          success: "Producto creado con exito",
          error: "Error al crear el producto",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      if (response?.status == 201 && response?.data?.result) {
        GETP();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      toast.error("Error al crear el producto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return false;
    }
  };

  const UPDATEP = async (product: ProductIF): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await toast.promise(
        updateProduct(product),
        {
          pending: "Actualizando producto",
          success: "Producto actualizado con exito",
          error: "Error al actualizar el producto",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      if (response?.data?.result) {
        GETP();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      toast.error("Error al actualizar el producto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return false;
    }
  };

  const REMOVEP = async (id: string): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await toast.promise(
        deleteProduct(id),
        {
          pending: "Eliminando producto",
          success: "Producto eliminado con exito",
          error: "Error al eliminar el producto",
        },
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      if (response?.status == 200 && response?.data?.result) {
        GETP();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      toast.error("Error al eliminar el producto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return false;
    }
  };
  useEffect(() => {
    GETP();
  }, [currentPage, amountProducts]);
  
  return (
    <ProductContext.Provider
      value={{
        products,
        code,
        loading,
        pages,
        currentPage,
        setCurrentPage,
        amountProducts,
        setAmountProducts,
        GETP,
        FETCHP,
        CREATEP,
        UPDATEP,
        REMOVEP,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
