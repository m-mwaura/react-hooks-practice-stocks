import React from "react";

function SearchBar({ onSortChange, onFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={() => onSortChange("Alphabetically")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={() => onSortChange("Price")}
        />
        Price
        </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
