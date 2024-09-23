import { useContext } from "react";
import "../SCSS/CartIcon.scss";
import { CartContext } from "../Context/CartContext";
import { FaCartPlus } from "react-icons/fa";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 2000);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <FaCartPlus size={20} />
    </div>
  );
};

export default CartIcon;
