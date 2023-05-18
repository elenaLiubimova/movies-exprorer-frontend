import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { mainApi } from '../../utils/MainApi';

const SavedMovies = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  setIsShowNavigation,
  setSavedMovies,
  savedMovies,
  handleRemoveFromSaved,
  isSavedMoviesPage,
  setIsSavedMoviesPage,
  filterFilms,
  isShortFilm,
  setSearchedFilm,
  setIsShortFilm,
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);
  setIsSavedMoviesPage(true);

  const searchSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((savedMovies) => setSavedMovies(savedMovies))
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const filteredSavedMovies = filterFilms(savedMovies);

  return (
    <>
      <Header
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <main className="movies">
        <Search
          isSavedMoviesPage={isSavedMoviesPage}
          isShortFilm={isShortFilm}
          setSearchedFilm={setSearchedFilm}
          setIsShortFilm={setIsShortFilm}
          searchSavedMovies={searchSavedMovies}
        />
        {savedMovies && (
          <MoviesCardList
            films={filteredSavedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            isSavedMoviesPage={isSavedMoviesPage}
            setIsSavedMoviesPage={setIsSavedMoviesPage}
          />
        )}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default SavedMovies;
