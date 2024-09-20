import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./Utils/Stripe.js";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// fireBase is on sarry7045@gmail.com mail
