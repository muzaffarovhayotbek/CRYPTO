import React from 'react';
import './Card.css';
function Card(props) {
  const { crypto } = props;
  console.log('crypto', crypto);

  return (
    <div className="card">
      <div className="container">
        <h3>
          <img src={crypto?.image} width={80} alt="" />
          <h2>{crypto?.symbol}&nbsp;</h2>
          <span>{crypto?.price_change_percentage_24h.toFixed(2)} %</span>
        </h3>

        <h2>₹159,249.00</h2>
      </div>
    </div>
  );
}

export default Card;
