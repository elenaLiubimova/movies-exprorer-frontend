import React from 'react';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = ({
  searchMovies,
  setSearchedFilm,
  isShortFilm,
  setIsShortFilm,
  filterFilms,
  isSavedMoviesPage,
  savedMovies,
  setSavedMovies,
  searchedFilm
}) => {
  return (
    <section className="search">
      <SearchForm
        searchMovies={searchMovies}
        setSearchedFilm={setSearchedFilm}
        isSavedMoviesPage={isSavedMoviesPage}
        filterFilms={filterFilms}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        isShortFilm={isShortFilm}
        searchedFilm={searchedFilm}
      />
      <FilterCheckbox isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm} />
    </section>
  );
};

export default Search;
