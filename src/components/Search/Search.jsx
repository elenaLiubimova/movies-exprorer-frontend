import React from 'react';
import '../../index.css';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = () => {
  return (
    <section className="search">
      <SearchForm />
      <FilterCheckbox />
    </section>
  );
};

export default Search;
