// src/components/PartInForm.js
import React, { useState } from 'react';

const PartInForm = ({ onPartIn }) => {
  const [partName, setPartName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPartIn({ partName, quantity: parseInt(quantity), location });
    setPartName('');
    setQuantity('');
    setLocation('');
  };

  return (
    <div>
      <h2>Part In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Part Name:</label>
          <input type="text" value={partName} onChange={(e) => setPartName(e.target.value)} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <button type="submit">Add Part</button>
      </form>
    </div>
  );
};

export default PartInForm;
