import React from 'react';
import './Search.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const Search = ({
  getMovies,
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
        getMovies={getMovies}
        setEnteredToInputMovie={setEnteredToInputMovie}
        enteredToInputMovie={enteredToInputMovie}
        isSavedMoviesPage={isSavedMoviesPage}
        getSavedMovies={getSavedMovies}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        // searchMovies={searchMovies}
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
