import React from 'react';
import { FilterField } from './Filter.styled';

const Filter = ({ handleChange, filterStateData }) => {
  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input
        onChange={handleChange}
        value={filterStateData}
        type="text"
        name="filter"
      />
    </FilterField>
  );
};

export default Filter;
