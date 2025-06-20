import React from "react";
import { ProductProvider } from "./Product/ProductContext";
import { AuthProvider } from "./Auth/AuthContext";
import { UserProvider } from "./User/UserContext";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <UserProvider>{children}</UserProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default AppProvider;
