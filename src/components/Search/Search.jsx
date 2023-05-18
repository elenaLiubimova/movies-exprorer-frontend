import React from 'react';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = ({
  searchMovies,
  setSearchedFilm,
  isShortFilm,
  setIsShortFilm,
  isSavedMoviesPage,
  searchSavedMovies
}) => {
  return (
    <section className="search">
      <SearchForm
        searchMovies={searchMovies}
        setSearchedFilm={setSearchedFilm}
        isSavedMoviesPage={isSavedMoviesPage}
        searchSavedMovies={searchSavedMovies}
      />
      <FilterCheckbox isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm} />
    </section>
  );
};

export default Search;
