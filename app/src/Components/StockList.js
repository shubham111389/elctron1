// src/components/StockList.js
import React from 'react';

const StockList = ({ stock }) => {
  return (
    <div>
      <h2>Stock List</h2>
      <table>
        <thead>
          <tr>
            <th>Part Name</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((item, index) => (
            <tr key={index}>
              <td>{item.partName}</td>
              <td>{item.quantity}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
