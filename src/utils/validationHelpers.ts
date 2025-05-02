import ProductIF from "../interface/product.interface";

export const validateProductForm = (product: ProductIF): string[] => {
  const errorslist: string[] = [];


  if (!product.name || typeof product.name !== "string") {
    errorslist.push("name");
  }

  if (!product.model || typeof product.model !== "string") {
    errorslist.push("model");
  }

  if (!product.brand || typeof product.brand !== "string") {
    errorslist.push("brand");
  }

  if (!product.colors || typeof product.colors !== "string") {
    errorslist.push("colors");
  }

  if (!product.liters  || typeof product.liters !== "string") {
    errorslist.push("liters");
  }

  if (!product.km || typeof product.km !== "string") {
    errorslist.push("km");
  }

  if (!product.engine || typeof product.engine !== "string") {
    errorslist.push("engine");
  }

  if (!product.description || typeof product.description !== "string") {
    errorslist.push("description");
  }

  if (!product.weight || typeof product.weight !== "string") {
    errorslist.push("weight");
  }

  if (!product.tires || typeof product.tires !== "string") {
    errorslist.push("tires");
  }

  if (
    !product.purchase_price ||
    typeof product.purchase_price !== "number"
  ) {
    errorslist.push("purchase_price");
  }

  if (!product.sale_price || typeof product.sale_price !== "number") {
    errorslist.push("sale_price");
  }

  if (product.status === null || typeof product.status !== "boolean") {
    errorslist.push("status");
  }

//   if (product.user === null || typeof product.user !== "object") {
//     errorslist.push("user");
//   }

//   if (product.user && product.user.id_user === null) {
//     errors.user = "El id del usuario es requerido";
//   }

//   if (product.user && typeof product.user.id_user !== "string") {
//     errors.user = "El id del usuario debe ser un string";
//   }

  return errorslist;
};
