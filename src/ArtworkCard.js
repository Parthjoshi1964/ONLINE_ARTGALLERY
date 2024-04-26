import React, { useState } from 'react';
import './style.css'; // Importing CSS file for styling

const Product = ({ id, name, price, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name, price });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  const [isBuying, setIsBuying] = useState(false);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleBuy = () => {
    setIsBuying(true);
  };

  const handleConfirmBuy = () => {
    alert("Thank you for your purchase!");
    // Perform additional actions here, such as clearing the cart
  };

  const handleCancelBuy = () => {
    setIsBuying(false);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${totalPrice}</p>
      <button onClick={handleBuy}>Buy</button>
      {isBuying && (
        <div>
          <p>Confirm purchase?</p>
          <button onClick={handleConfirmBuy}>Confirm</button>
          <button onClick={handleCancelBuy}>Cancel</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <div>
        <h2>Products</h2>
        <Product id={1} name="Adam" price={10} onAddToCart={addToCart} />
        <Product id={2} name="Garden" price={15} onAddToCart={addToCart} />
        <Product id={3} name="Jesus" price={20} onAddToCart={addToCart} />
        <Product id={4} name="Monalisa" price={35} onAddToCart={addToCart} />
        <Product id={5} name="Supper" price={65} onAddToCart={addToCart} />
        <Product id={6} name="Tower" price={40} onAddToCart={addToCart} />
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
