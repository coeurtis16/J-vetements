import React from 'react';
import PayPalCheckout from '../components/PayPalCheckout';
import MobileMoney from '../components/MobileMoney';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur J Vêtements</h1>
      <p>Boutique professionnelle et sobre de vêtements.</p>
      <PayPalCheckout />
      <MobileMoney />
    </div>
  );
};

export default Home;
