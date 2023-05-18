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
  searchSavedMovies,
  setFilteredMovies,
  films,
  filterFilms
}) => {
  return (
    <section className="search">
      <SearchForm
        searchMovies={searchMovies}
        setSearchedFilm={setSearchedFilm}
        isSavedMoviesPage={isSavedMoviesPage}
        searchSavedMovies={searchSavedMovies}
        setFilteredMovies={setFilteredMovies}
        filterFilms={filterFilms}
        films={films}
      />
      <FilterCheckbox isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm} />
    </section>
  );
};

export default Search;
