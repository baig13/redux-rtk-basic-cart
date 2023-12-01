import "./Home.css";
import React from "react";
import { Products } from "../features/products/Products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <button
        style={{
          padding: "10px 20px",
          marginLeft: "230px",
          position: "fixed",
          marginTop: "50px",
        }}
      >
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          Go to Cart
        </Link>
      </button>
      <Products />
    </>
  );
};

export default Home;
