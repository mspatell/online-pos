import React, { forwardRef } from "react";
import "../styles/print.css";

const DEFAULT_BUSINESS_INFO = {
  name: "Your Cloud POS",
  address: "123 Your Business Location",
  phone: "(555) 123-4567"
};

const ADDITIONAL_INFO = {
  message: "Thank you for your purchase!",
  thankYouNote: "Please come again"
};

const PrintableHeader = ({ businessInfo }) => (
  <div className="print-header">
    <h2>{businessInfo?.name || 'Receipt'}</h2>
    <p>{businessInfo?.address}</p>
    <p>{businessInfo?.phone}</p>
    <p>Date: {new Date().toLocaleString()}</p>
  </div>
);

const PrintableTable = ({ items }) => (
  <table className="table">
    <thead>
      <tr>
        <td>#</td>
        <td>Name</td>
        <td>Price</td>
        <td>Qty</td>
        <td>Total</td>
      </tr>
    </thead>
    <tbody>
      {items?.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.totalAmount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const PrintableFooter = ({ additionalInfo }) => (
  <div className="print-footer">
    {additionalInfo && (
      <div className="additional-info">
        <p>{additionalInfo.message}</p>
        <p>{additionalInfo.thankYouNote}</p>
      </div>
    )}
  </div>
);

export const ComponentToPrint = forwardRef(({ cart, subtotal, tax, finalTotal, businessInfo }, ref) => {
  const hasItems = cart?.length > 0;

  return (
    <div ref={ref} className="print-container">
      <PrintableHeader businessInfo={businessInfo || DEFAULT_BUSINESS_INFO} />
      
      {hasItems ? (
        <>
          <PrintableTable items={cart} />
          <div className="summary-section">
            <h3>Subtotal: ${subtotal}</h3>
            <h3>Tax: ${tax}</h3>
            <h2>Final Total: ${finalTotal}</h2>
          </div>
        </>
      ) : (
        <div className="empty-cart-message">
          <p>No items in cart</p>
        </div>
      )}

      <PrintableFooter additionalInfo={ADDITIONAL_INFO} />
    </div>
  );
});

ComponentToPrint.displayName = 'ComponentToPrint';
