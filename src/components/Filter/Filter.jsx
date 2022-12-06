import React from 'react';
import { FilterField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

const Filter = () => {
  const filterFromStore = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input
        onChange={handleChange}
        value={filterFromStore}
        type="text"
        name="filter"
      />
    </FilterField>
  );
};

export default Filter;
