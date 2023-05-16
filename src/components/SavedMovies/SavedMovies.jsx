import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { mainApi } from '../../utils/MainApi';
import MoviesCard from '../MoviesCard/MoviesCard';

const SavedMovies = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  setIsShowNavigation,
  savedMovies,
  handleRemoveFromSaved
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);

  return (
    <>
      <Header
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <main className="movies">
        <Search />
        {savedMovies && <MoviesCardList films={savedMovies} handleRemoveFromSaved={handleRemoveFromSaved} />}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default SavedMovies;
