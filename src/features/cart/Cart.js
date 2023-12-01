import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsync, fetchAsync } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div className="cart-item">
            <img className="img-fluid" src={item.thumbnail} alt="" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>

            <div className="close">
              <button onClick={() => dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
