// newarrival.js

import React from 'react';
import { callApi, errorResponse, getSession } from './main';
import './newarrival.css';

const NewArrival = () => {
  // Assuming new arrivals data is fetched from somewhere, let's create a dummy array
  const newArrivals = [
    { id: 1, name: 'Artwork 1', imageUrl: './images/download.jpg', isNew: true },
    { id: 2, name: 'Artwork 2', imageUrl: './images/gallery.jpg', isNew: false },
    { id: 3, name: 'Artwork 3', imageUrl: 'klulogo.jpg', isNew: true },
    
  ];

  return (
    <div className="new-arrival-container">
      <h2>New Arrivals</h2>
      <div className="new-arrival-items">
        {newArrivals.map(item => (
          <div key={item.id} className={`new-arrival-item ${item.isNew ? 'highlight' : ''}`}>
            {item.isNew && <span className="new-badge">New</span>}
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
