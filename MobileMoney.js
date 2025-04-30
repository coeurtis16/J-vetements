import React, { useState } from 'react';
import axios from 'axios';

const MobileMoney = () => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('https://api.singpay.ga/pay', {
        api_key: 'VOTRE_API_KEY_SINGPAY',
        phone: phone,
        amount: amount,
        operator: 'airtel' // ou 'moov'
      });
      alert('Paiement en cours : ' + JSON.stringify(response.data));
    } catch (error) {
      alert('Erreur de paiement : ' + error.message);
    }
  };

  return (
    <div>
      <h2>Paiement Mobile Money</h2>
      <input placeholder="Numéro de téléphone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input placeholder="Montant" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handlePayment}>Payer avec Mobile Money</button>
    </div>
  );
};

export default MobileMoney;
