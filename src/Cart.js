// Cart.js
import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;

