import React from 'react'

const FilterItem = (props) => {
  return (
    <div className="filter--item">
      <p data-id="">{props.sendFilterText}</p>
      <span
        className="spann"
      >
        &times;
      </span>
    </div>
  );
}

export default FilterItem