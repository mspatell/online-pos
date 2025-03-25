import React, { forwardRef } from "react";
import { PrintableHeader } from "./print/Printable";
import { PrintableTable } from "./print/Printable";
import { PrintableFooter } from "./print/Printable";
import "../components/print/style/print.css";

export const ComponentToPrint = forwardRef(({ cart, subtotal, tax, finalTotal, businessInfo }, ref) => {

  const defaultBusinessInfo = {
    name: "Your Cloud POS",
    address: "123 Your Business Location",
    phone: "(555) 123-4567"
  };

  const additionalInfo = {
    message: "Thank you for your purchase!",
    thankYouNote: "Please come again"
  };

  // Guard clause for empty cart
  if (!cart || cart.length === 0) {
    return (
      <div ref={ref} className="print-container">
        <PrintableHeader 
          businessInfo={defaultBusinessInfo} 
        />
        <div className="empty-cart-message">
          <p>No items in cart</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="print-container">
      <PrintableHeader 
        businessInfo={businessInfo || defaultBusinessInfo} 
      />
      
      {cart && cart.length > 0 && (
      <PrintableTable items={cart} />
      )}

      {/* Display Subtotal, Tax, and Final Total */}
      <div className="summary-section">
        <h3>Subtotal: ${subtotal}</h3>
        <h3>Tax: ${tax}</h3>
        <h2>Final Total: ${finalTotal}</h2>
      </div>

      <PrintableFooter 
        additionalInfo={additionalInfo}
      />
    </div>
  );
});

ComponentToPrint.displayName = 'ComponentToPrint';
