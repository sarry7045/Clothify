import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "../SCSS/CartIcon.scss";
import { CartContext } from "../Context/CartContexr";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      {/* <ShoppingIcon className="shopping-icon" /> */}
      Cart
      <span className="item-count">0</span>
    </div>  
  );
};

export default CartIcon;
