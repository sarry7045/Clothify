import { useContext } from "react";
import "../SCSS/CartIcon.scss";
import { CartContext } from "../Context/CartContext";
import { FaCartPlus } from "react-icons/fa";
// import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      {/* <ShoppingIcon className="shopping-icon" /> */}
      <FaCartPlus size={20}/>
      {/* <span className="item-count">{cartItemCount}</span> */}
    </div>
  );
};

export default CartIcon;
