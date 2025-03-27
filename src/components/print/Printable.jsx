import React from 'react';

export const PrintableHeader = ({ businessInfo }) => {
  return (
    <div className="print-header">
      <h2>{businessInfo?.name || 'Receipt'}</h2>
      <p>{businessInfo?.address}</p>
      <p>{businessInfo?.phone}</p>
      <p>Date: {new Date().toLocaleString()}</p>
    </div>
  );
};

export const PrintableTable = ({ items }) => {
  return (
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
};


export const PrintableFooter = ({ totalAmount, additionalInfo }) => {
  return (
    <div className="print-footer">
      {/* <h2 className="px-2">Total Amount: ${totalAmount}</h2> */}
      {additionalInfo && (
        <div className="additional-info">
          <p>{additionalInfo.message}</p>
          <p>{additionalInfo.thankYouNote}</p>
        </div>
      )}
    </div>
  );
};
