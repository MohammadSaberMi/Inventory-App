import React from 'react';

function ProductList({ products, categories, setProducts }) {
  const findCategory = (categoryId) => {
    return categories.find((ca) => ca.id === parseInt(categoryId)).title;
  };
  const deleteProduct = (productId) => {
    const fileterProducts = products.filter(
      (pr) => pr.id !== parseInt(productId)
    );
    setProducts(fileterProducts);
  };
  return (
    <div>
      <h2>product list </h2>
      <div className="overflow-x-auto">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-slate-400">{product.title}</span>
              <div className="flex items-center gap-x-4">
                <span className="text-slate-400">
                  {new Date(product.createdAt).toLocaleDateString('fa-IR')}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl">
                  {findCategory(product.categoryId)}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300 ">
                  {product.quantity}
                </span>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="delete-product border px-2 py-0.5 rounded-2xl text-sm  border-red-500 text-red-500"
                >
                  delte
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
