export const ProductList = ({ products, onProductClick }) => {
  if (!Array.isArray(products)) return null;

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-lg-4 mb-4">
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
