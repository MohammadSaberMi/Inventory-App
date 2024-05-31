import { useState } from 'react';

function Filter({
  onSort,
  onSearch,
  searchValue,
  sort,
  categories,
  OnSelectCategory,
  selectedCategory,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="input" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sort"
          id="sort"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="input" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          name="sort"
          id="sort"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}
          onChange={OnSelectCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map((item) => {
            return (
              <option
                key={item.id}
                className="bg-slate-500 text-slate-300"
                value={item.id}
              >
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
