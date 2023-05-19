import React from 'react';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = ({
  setEnteredToInputMovie,
  enteredToInputMovie,
  isShortFilm,
  setIsShortFilm,
  isSavedMoviesPage,
  getSavedMovies,
  searchedMovies,
  setSearchedMovies,
  films,
  isMoviesPage,
}) => {
  return (
    <section className="search">
      <SearchForm
        setEnteredToInputMovie={setEnteredToInputMovie}
        enteredToInputMovie={enteredToInputMovie}
        isSavedMoviesPage={isSavedMoviesPage}
        getSavedMovies={getSavedMovies}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        films={films}
        isMoviesPage={isMoviesPage}
      />
      <FilterCheckbox
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        isMoviesPage={isMoviesPage}
      />
    </section>
  );
};

export default Search;
