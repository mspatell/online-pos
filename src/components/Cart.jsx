import React from 'react';
import { ComponentToPrint } from "./ComponentToPrint";

const TAX_RATES = { LOW: 0.05, HIGH: 0.13 };
const TAX_THRESHOLD = 4.0;

export const Cart = ({ cart, totalAmount, onRemoveProduct, onPrint }) => {
  const calculateTotals = (amount) => {
    const taxRate = amount <= TAX_THRESHOLD ? TAX_RATES.LOW : TAX_RATES.HIGH;
    const tax = amount * taxRate;
    
    return {
      subtotal: amount,
      tax,
      finalTotal: amount + tax
    };
  };

  const { subtotal, tax, finalTotal } = calculateTotals(totalAmount);
  const taxPercentage = subtotal <= TAX_THRESHOLD ? '5%' : '13%';
  const hasItems = cart.length > 0;

  return (
    <div className="col-lg-6">
      <div className="table-responsive bg-dark">
        <table className="table table-responsive table-dark table-hover">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveProduct(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-2 text-white">
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          <h3>Tax ({taxPercentage}): ${tax.toFixed(2)}</h3>
          <h2>Final Total: ${finalTotal.toFixed(2)}</h2>
        </div>
      </div>

      <div className="mt-3">
        {hasItems ? (
          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={() => window.print()}>
              Print Receipt
            </button>
            {onPrint}
          </div>
        ) : (
          <p>Please add a product to the cart</p>
        )}
      </div>

      {hasItems && (
        <div className="mt-3">
          <button 
            className="btn btn-danger" 
            onClick={() => window.location.reload()}
          >
            Clear Cart
          </button>
          <button 
            className="btn btn-success" 
            onClick={() => window.location.href = '/order-queue'}
          >
            Place Order
          </button>
        </div>
      )}

      <ComponentToPrint
        cart={cart}
        totalAmount={totalAmount}
        subtotal={subtotal}
        tax={tax}
        finalTotal={finalTotal}
      />
    </div>
  );
};
