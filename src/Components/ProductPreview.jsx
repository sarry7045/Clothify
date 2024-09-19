import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import CategoryPreview from "./CategoryPreview";

const ProductPreview = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      {Object.keys(products).map((title) => {
        const products2 = products[title];
        return (
          <CategoryPreview key={title} title={title} products={products2} />
        );
      })}
    </>
  );
};

export default ProductPreview;
