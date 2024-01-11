import React from "react";

function SearchBar({sort, onChangeSort, filter, onChangeFilter}) {



  return (
    <div>
      <strong>Sort by:</strong>

      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === "Alphabetically"}
          onChange={(e) => onChangeSort(e.target.value)}
        />
        Alphabetically
      </label>
      
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === "Price"}
          onChange={(e) => onChangeSort(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ (e) => onChangeFilter(e.target.value)} value={filter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
