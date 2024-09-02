// src/components/PartOutForm.js
import React, { useState } from 'react';

const PartOutForm = ({ onPartOut }) => {
  const [partName, setPartName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPartOut({ partName, quantity: parseInt(quantity) });
    setPartName('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Part Out</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Part Name:</label>
          <input type="text" value={partName} onChange={(e) => setPartName(e.target.value)} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button type="submit">Remove Part</button>
      </form>
    </div>
  );
};

export default PartOutForm;
