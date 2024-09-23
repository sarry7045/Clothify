import { useContext, useState, useEffect, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Context/ProductContext";
import { IoChevronBackCircle } from "react-icons/io5";
import "../SCSS/ProductCategory.scss";

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [products2, setProducts2] = useState(products[category]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts2(products[category]);
  }, [category, products]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <span
        style={{ cursor: "pointer" }}
        title="Back"
        onClick={() => navigate(-1)}
      >
        <IoChevronBackCircle size={25} />
      </span>
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
