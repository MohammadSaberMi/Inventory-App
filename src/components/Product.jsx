import React, { useState } from 'react';

function ProductForm({ setProducts, categories }) {
  const [productsFormData, setProductFormData] = useState({
    title: '',
    quantity: 0,
    categoryId: '',
  });
  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productsFormData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };
    if (
      productsFormData.title &&
      productsFormData.quantity &&
      productsFormData.categoryId
    ) {
      setProducts((prev) => [...prev, newProduct]);
      setProductFormData({ title: '', quantity: '', categoryId: '' });
    }
  };
  const chengeHandler = (e) => {
    const { value, name } = e.target;
    console.log(e.target.name, e.target.value);

    setProductFormData({ ...productsFormData, [name]: value });
  };
  return (
    <div>
      <div>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new product
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 mb-8">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              title
            </label>
            <input
              type="text"
              name="title"
              id="product-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              value={productsFormData.title}
              onChange={chengeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="product-quantity"
              className="block mb-1 text-slate-400"
            >
              quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              value={productsFormData.quantity}
              onChange={chengeHandler}
            />
          </div>
          <div>
            <label htmlFor="categoryId" className="block mb-1 text-slate-400">
              category
            </label>
            <select
              name="categoryId"
              id="product-category"
              className="bg-transparent text-slate-400 rounded-xl w-full"
              value={productsFormData.categoryId}
              onChange={chengeHandler}
            >
              <option className="bg-slate-500 text-slate-300" value="">
                select a category
              </option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.id}
                    className="bg-slate-500 text-slate-300"
                    value={category.id}
                  >
                    {category.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={addNewProduct}
              id="add-new-product"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add new product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
