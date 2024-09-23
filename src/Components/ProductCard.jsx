import Button from "../SubComponents/Button.jsx";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import "../SCSS/ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const [cartAddText, setCartAddText] = useState(false);

  const addProductToCart = () => {
    setCartAddText(true);
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        {cartAddText ? "Added to Cart" : " Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductCard;
