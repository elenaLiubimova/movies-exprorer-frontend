import React, { useContext } from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../contexts/AppContext';

const Movies = () => {
  const { setLoggedIn } = useContext(AppContext);
  setLoggedIn(true);
  
  return (
    <>
      <Header />
      <main className="movies">
        <Search />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
