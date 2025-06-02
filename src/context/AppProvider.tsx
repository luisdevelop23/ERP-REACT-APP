import React from "react";
import { ProductProvider } from "./Product/ProductContext"; 
import { AuthProvider } from "./Auth/AuthContext";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProductProvider>
      {/* Agrega más proveedores aquí si es necesario */}
      <AuthProvider>
      {children}
      </AuthProvider>
    </ProductProvider>
  );
};

export default AppProvider;
