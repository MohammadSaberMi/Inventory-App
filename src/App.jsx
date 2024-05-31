import { useEffect, useState } from 'react';
import './App.css';
import CategoryForm from './components/Category';
import Navbar from './components/Navbar';
import ProductForm from './components/Product';
import ProductList from './components/ProductList';
import Filter from './components/Filter';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilerProducts] = useState([]);
  const [sort, setSort] = useState('latest');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filterSelectedCategory(result);
    setFilerProducts(result);
  }, [sort, products, searchValue, selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (arr) => {
    return arr.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (arr) => {
    let sortedProduct = [...arr];
    return sortedProduct.sort((a, b) => {
      if (sort === 'latest') {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === 'earliest') {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };
  const filterSelectedCategory = (arr) => {
    let filterCategory = [...arr];
    if (!selectedCategory) return filterCategory;
    return filterCategory.filter((f) => f.categoryId === selectedCategory);
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const saveCategory = JSON.parse(localStorage.getItem('categories')) || [];
    setProducts(savedProducts);
    setCategories(saveCategory);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);
  useEffect(() => {
    if (categories.length) {
      localStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories]);
  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <Navbar products={products} />
        <div className="container max-w-screen-sm mx-auto">
          <CategoryForm setCategories={setCategories} />
          <ProductForm setProducts={setProducts} categories={categories} />
          <Filter
            onSort={sortHandler}
            onSearch={searchHandler}
            sort={sort}
            searchValue={searchValue}
            categories={categories}
            selectedCategory={selectedCategory}
            OnSelectCategory={selectedCategoryHandler}
          />
          <ProductList
            products={filterProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
