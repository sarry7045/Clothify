import { Outlet, Link } from "react-router-dom";
import "../SCSS/Navbar.styles.scss";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { signOutUser } from "../Utils/FireBase";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { CartContext } from "../Context/CartContext";
import MainIcon from "../assets/shopping.png";

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
          <img
            src={MainIcon}
            alt="Main Icon"
            style={{ width: "70px", height: "70px" }}
          />
          {/* <h2 className="logo" style={{ color: "orange" }}>
            Clothify
          </h2> */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <span style={{color:"#FF3C00"}}>{currentUser && `Hii ${currentUser?.email.slice(0, 5).toUpperCase()}`}</span>
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
