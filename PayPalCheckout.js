import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

function PayPalCheckout() {
  return (
    <div>
      <h2>Payer avec PayPal</h2>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "20.00", // Remplacer par le montant réel
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Paiement effectué par " + details.payer.name.given_name);
          });
        }}
      />
    </div>
  );
}

export default PayPalCheckout;
