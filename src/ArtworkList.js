// ArtworkList.js
import React from "react";
import Artwork from "./Artwork";

const ArtworkList = ({ artworks, addToCart }) => {
  return (
    <div className="artwork-list">
      <h2>Artworks</h2>
      {artworks.map((artwork) => (
        <Artwork key={artwork.id} artwork={artwork} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ArtworkList;
