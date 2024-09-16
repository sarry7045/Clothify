import Button from "../SubComponents/Button.jsx";
import "../SCSS/CartDropDown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
