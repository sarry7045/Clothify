import { Outlet, Link } from "react-router-dom";
import "../SCSS/Navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { signOutUser } from "../Utils/FireBase";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { CartContext } from "../Context/CartContexr";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log("currentUser", currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">  
          <h2 className="logo">Clothify</h2>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authenticate">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
