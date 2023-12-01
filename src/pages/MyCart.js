import "./Home.css";
import React from "react";
import { Cart } from "../features/cart/Cart";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <>
      <Cart />
      <button
        style={{ padding: "10px 20px", marginLeft: "780px", marginTop: "10px" }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Go to Products page
        </Link>
      </button>
    </>
  );
};

export default MyCart;
