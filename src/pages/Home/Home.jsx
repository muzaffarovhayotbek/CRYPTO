import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import './Home.css';
import axios from 'axios';
import icon from '../../assets/icon.svg';

function Home() {
  const [bitcoin, setBitcoin] = useState(null); // Bitta coin uchun ob'ekt sifatida boshlaymiz

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/bitcoin')
      .then((response) => {
        setBitcoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Carousel />
      <div className="container home">
        <h2>Cryptocurrency Prices by Market Cap</h2>
        <input type="text" placeholder="Search For a Crypto Currency.." />
        <div className="title container">
          <h2>Coin</h2>
          <h2>Price</h2>
          <h2>24h Change</h2>
          <h2>Market Cap</h2>
        </div>

        {bitcoin && (
          <div>
            <ul className="titles">
              <li className="name">
                <img src={bitcoin.image.small} alt={bitcoin.name} width={50} height={50} />
                {bitcoin.name}
              </li>
              <li className="price">
                ₹{bitcoin.market_data.current_price.usd}
              </li>
              <li className="change">
                <img src={icon} alt="icon" width={26} height={24} />
                {bitcoin.market_data.price_change_percentage_24h}%
              </li>
              <li className="cap">₹ {bitcoin.market_data.market_cap.usd}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
