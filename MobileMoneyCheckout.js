import React from 'react';

function MobileMoneyCheckout() {
  const handlePayment = () => {
    // Simulation d'appel API vers un backend qui gère SingPay (Airtel/Moov)
    alert("Paiement Mobile Money (Airtel / Moov) déclenché !");
  };

  return (
    <div>
      <h2>Payer avec Mobile Money</h2>
      <button onClick={handlePayment}>Payer avec Airtel / Moov</button>
    </div>
  );
}

export default MobileMoneyCheckout;
