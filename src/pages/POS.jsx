// src/pages/POS.jsx

import { React, useRef }  from "react";
import MainLayout from "../layouts/MainLayout";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { ProductList } from "../components/ProductList";
import { Cart } from "../components/Cart";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";

function POS() {
  const { products, isLoading } = useProducts();
  const { cart, totalAmount, addProductToCart, removeProduct } = useCart();
  const componentRef = useRef(null);

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => console.log('Before printing...'),
    onAfterPrint: () => console.log('Printed successfully!'),
    onPrintError: (error) => console.error('Failed to print:', error),
    removeAfterPrint: true,
    trigger: () => (
      <button 
        className="btn btn-primary"
        disabled={!cart || cart.length === 0}
      >
        Print Receipt
      </button>
    )
  });

  const handlePrint = () => {
    if (!cart || cart.length === 0) {
      console.error('Cart is empty');
      return;
    }
    if (componentRef.current) {
      handleReactToPrint();
    } else {
      console.error('Print component reference not found');
    }
  };

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          {isLoading ? (
            "Loading"
          ) : (
            <ProductList products={products} onProductClick={addProductToCart} />
          )}
        </div>
        <div className="print-wrapper">
          <ComponentToPrint
            ref={componentRef}
            cart={cart}
            totalAmount={totalAmount}
          />
        </div>
        <Cart
          cart={cart}
          totalAmount={totalAmount}
          onRemoveProduct={removeProduct}
          onPrint={handlePrint}
        />
      </div>
    </MainLayout>
  );
}

export default POS;
