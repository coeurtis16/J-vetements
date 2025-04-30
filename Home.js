import React from 'react';
import PayPalCheckout from '../components/PayPalCheckout';
import MobileMoneyCheckout from '../components/MobileMoneyCheckout';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur J Vêtements</h1>
      <p>Boutique professionnelle et sobre de vêtements.</p>
      <PayPalCheckout />
      <MobileMoneyCheckout />
    </div>
  );
};

export default Home;
