import React from "react";

const ShopFilters = ({
  searchItem,
  setSearchItem,
  sortType,
  setSortType,
  category,
  setCategory,
  categories,
  theme,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
    <input
      type="search"
      placeholder="🔍 Search your Item"
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
      className="border border-gray-300 w-full sm:w-1/3 p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
    />

    <select
      value={sortType}
      onChange={(e) => setSortType(e.target.value)}
      className="border border-gray-300 p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      <option value="asc">⬇️ Low-to-High</option>
      <option value="desc">⬆️ High-To-Low</option>
    </select>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border border-gray-300 p-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      <option value="">📦 All_Items</option>
      {categories.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

export default ShopFilters;
