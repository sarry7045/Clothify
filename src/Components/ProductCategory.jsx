import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Context/ProductContext";
import "../SCSS/ProductCategory.scss";

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [products2, setProducts2] = useState(products[category]);

  useEffect(() => {
    setProducts2(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container_product">
        {products2 &&
          products2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default ProductCategory;
