import React from 'react';
import { FilterField } from './Filter.styled';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filterStateData: PropTypes.string.isRequired,
};
