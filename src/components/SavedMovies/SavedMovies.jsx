import React, { useContext } from 'react';
import Search from '../Search/Search';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AppContext } from '../../contexts/AppContext';
import { savedCards } from '../../utils/constants';

const SavedMovies = () => {
  const { setLoggedIn } = useContext(AppContext);
  setLoggedIn(true);
  
  return (
    <>
      <Header />
      <main className="movies">
        <Search />
        <MoviesCardList cards={savedCards}/>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;