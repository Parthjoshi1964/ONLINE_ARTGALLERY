// Artwork.js
import React from "react";

const Artwork = ({ artwork, addToCart }) => {
  return (
    <div className="artwork">
      <h3>{artwork.name}</h3>
      <p>Price: ${artwork.price}</p>
      <button onClick={() => addToCart(artwork)}>Add to Cart</button>
    </div>
  );
};

export default Artwork;
