import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext";
import PaymentForm from "./PaymentForm";
import CheckoutItem from "./CheckoutItem";
import EmptyCart from "../assets/EmptyCart.png";
import "../SCSS/Checkout.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length > 0 ? (
        <>
          <div className="total">TOTAL: ${cartTotal}</div>
          {!currentUser && (
            <span style={{ marginRight: "-39rem", marginTop: "10px" }}>
              <span
                onClick={() => navigate("/authenticate")}
                style={{ color: "#0504AA", cursor: "pointer" }}
              >
                SIGN IN
              </span>{" "}
              to Pay
            </span>
          )}
          <PaymentForm />
        </>
      ) : (
        <>
          <div>
            <img src={EmptyCart} />
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
