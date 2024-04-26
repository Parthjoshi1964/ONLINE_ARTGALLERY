import React, { useContext, useEffect } from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom'; 

function CartPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleRemoveFromCart = async (artworkId) => {

  };

  const handleCheckout = async () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <img src={item.image} alt={item.title} width="100" />
                <div>
                  <h3>{item.title}</h3>
                  <p>By {item.artist}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                  <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
