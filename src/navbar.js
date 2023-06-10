import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setHomeStyle, setCartStyle }) {
  const navStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    marginRight: "10px",
    color: "#333",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    listStyle: "none",
    display: "inline",
  };

  const centerLinkContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  function viewCart(e) {
    e.preventDefault();
    setCartStyle({ display: "none" });
    setHomeStyle({ display: "block" });
  }

  function viewHome(e) {
    e.preventDefault();
    setCartStyle({ display: "block" });
    setHomeStyle({ display: "none" });
  }

  return (
    <nav style={navStyle}>
      <div style={centerLinkContainerStyle}>
        <a style={linkStyle} onClick={(e) => viewHome(e)} href="/">
          Home
        </a>
      </div>
      <a style={linkStyle} onClick={(e) => viewCart(e)} href="/">
        <FontAwesomeIcon icon={faShoppingCart} />
        Cart
      </a>
    </nav>
  );
}

export default Navbar;
