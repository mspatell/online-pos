import React from 'react';

export const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="row">
      {products.map((product, key) => (
        <div key={key} className="col-lg-4 mb-4">
          <div
            className="pos-item px-3 text-center border"
            onClick={() => onProductClick(product)}
          >
            <p>{product.name}</p>
            <img
              src={product.image}
              className="img-fluid"
              alt={product.name}
            />
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
