import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./products/ProductPage";
import InventoryPage from "./Inventory/InventoryPage";

const ProductRoutes = () => {
  return (
    <Routes>
      {/* Ruta índice para /dashboard/product */}
      <Route index element={<Navigate to="products" replace />} />

      {/* Hijos anidados */}
      <Route path="products" element={<ProductPage />} />
      <Route path="inventory" element={<InventoryPage />} />

      {/* Ruta catch all - opcional */}
      <Route path="*" element={<ProductPage />} />
    </Routes>
  );
};

export default ProductRoutes;
