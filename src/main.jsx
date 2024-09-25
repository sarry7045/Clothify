import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./Utils/Stripe.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import "./index.scss";

const client = new ApolloClient({
  uri: "https://crwn-clothing.com/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// fireBase is on sarry7045@gmail.com mail
