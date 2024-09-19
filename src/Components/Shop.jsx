import { Routes, Route } from "react-router-dom";
import ProductPreview from "./ProductPreview";
import ProductCategory from "./ProductCategory";
import "../SCSS/Shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductPreview />} />
      <Route path=":category" element={<ProductCategory />} />
    </Routes>
  );
};

export default Shop;
