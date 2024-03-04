import React from 'react';
import FilterItem from './FilterItem';

const Filter = (props) => {
  const nextFilter = props.items;
  return (
    nextFilter.length !== 0 ? <div className='filter-container'>
      <div className="filter">
        {nextFilter.map((filter) => (
          <FilterItem key={Math.random().toString()} sendFilterText={filter} />
        ))}
        <input
          type="button"
          className="clear"
          value="Clear"
          // onClick={props.onCloseFilterHandler}
          // onClick={props.resetFilter}
        />
      </div>
    </div>:''
  );
};

export default Filter;
