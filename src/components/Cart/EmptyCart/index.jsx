import React from "react";
import "./styles.css";
import emptyCartImg from "./emptycart.png";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <img src={emptyCartImg} alt="empty" />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
