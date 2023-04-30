import React from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <main className="movies">
      <Search />
      <MoviesCardList />
    </main>
  );
};

export default Movies;
