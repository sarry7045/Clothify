import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utils/FireBase";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("Dataa", categoryMap);
      setProducts(categoryMap);
    };
    getCategories();
  }, []);

  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
