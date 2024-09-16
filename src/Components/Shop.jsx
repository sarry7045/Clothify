import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import "../SCSS/Shop.scss"

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
