import Button from "../SubComponents/Button.jsx";
import CartItem from "./CartItem.jsx";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "../SCSS/CartDropDown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("./checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
