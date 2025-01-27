import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const incrementHandler = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };

  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decrementHandler}>
        -
      </button>
      <button className="cart-actions" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
