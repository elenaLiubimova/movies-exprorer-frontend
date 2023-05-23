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
  searchedMovies,
  setSearchedMovies,
  films,
  isMoviesPage,
  isSearch,
  setIsSearch,
  savedMovies,
  setSavedMovies,
  getMoviesList,
  onSearchMovies
}) => {
  return (
    <section className="search">
      <SearchForm
        setEnteredToInputMovie={setEnteredToInputMovie}
        enteredToInputMovie={enteredToInputMovie}
        isSavedMoviesPage={isSavedMoviesPage}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        films={films}
        isMoviesPage={isMoviesPage}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        getMoviesList={getMoviesList}
        onSearchMovies={onSearchMovies}
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
