import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/userContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import App from "./App.jsx";
import "./index.scss";
import { CartProvider } from "./Context/CartContexr.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// fireBase is on sarry7045@gmail.com mail
