import React from 'react';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = ({
  searchMovies,
  searchedFilm,
  setSearchedFilm,
  isShortFilm,
  setIsShortFilm,
}) => {
  return (
    <section className="search">
      <SearchForm
        searchMovies={searchMovies}
        searchedFilm={searchedFilm}
        setSearchedFilm={setSearchedFilm}
      />
      <FilterCheckbox isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm} />
    </section>
  );
};

export default Search;
