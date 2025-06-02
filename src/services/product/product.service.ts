import Api from "../../api/AxiosConfig.ts";
import ProductIF from "../../interface/product.interface.ts";

const getNewCod = async () => {
  try {
    const responde = await Api.get("/api/product/newcod");
    if (responde.status === 200) {
      return responde.data;
    }
  } catch (error) {
    
    throw error;
  }
};
const getProducts = async (page: number, amount: number) => {
  try {
    const responde = await Api.get(
      `api/product/?page=${page}&amount=${amount}`
    );
    if (responde.status === 200) {
      return responde.data;
    }
  } catch (error) { 
    throw error;
  }
};

const fetchProduct = async (id: string) => {
  try {
    const responde = await Api.get(`api/product/${id}`);
    if (responde.status === 200 || responde.status === 201) {
      return responde.data;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const createProduct = async (product: ProductIF) => {
  try {
    console.log(product);
    const response = await Api.post("/api/product", product);

    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error("Error al crear el Producto:", error);
    throw error;
  }
};

const updateProduct = async (product: ProductIF) => {
  try {
    const responde = await Api.put(
      `api/product/${product.cod_product}`,
      product
    );
    if (responde.status === 200) {
      return responde;
    }
  } catch (error) {
    console.error("Error al actualizar el Producto:", error);
    throw error;
  }
};

const deleteProduct = async (id: string) => {
  try {
    const responde = await Api.delete(`api/product/${id}`);
    if (responde.status === 200) {
      return responde;
    }
  } catch (error) {
    console.error("Error al eliminar el Producto:", error);
    throw error;
  }
};

export {
  getProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  getNewCod,
  deleteProduct,
};
