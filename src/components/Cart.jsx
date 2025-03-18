import React from 'react';

export const Cart = ({ cart, totalAmount, onRemoveProduct, onPrint }) => {
  const calculateTotalWithTax = (amount) => {
    const taxRate = amount <= 4.0 ? 0.05 : 0.13;
    const taxAmount = amount * taxRate;
    const finalTotal = amount + taxAmount;
    
    return {
      subtotal: amount,
      tax: taxAmount,
      finalTotal: finalTotal
    };
  };

  const { subtotal, tax, finalTotal } = calculateTotalWithTax(totalAmount);

  return (
    <div className="col-lg-4">
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
            {cart.map((cartProduct, key) => (
              <tr key={key}>
                <td>{cartProduct.id}</td>
                <td>{cartProduct.name}</td>
                <td>{cartProduct.price}</td>
                <td>{cartProduct.quantity}</td>
                <td>{cartProduct.totalAmount}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveProduct(cartProduct)}
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
          <h3>Tax ({subtotal <= 4.0 ? '5%' : '13%'}): ${tax.toFixed(2)}</h3>
          <h2>Final Total: ${finalTotal.toFixed(2)}</h2>
        </div>
      </div>
      <div className="mt-3">
        {totalAmount !== 0 ? (
          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={() => window.print()}>
              Print Receipt
            </button>
            {onPrint}
          </div>
        ) : (
          "Please add a product to the cart"
        )}
      </div>
    </div>
  );
};
