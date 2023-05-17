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
  setSavedMovies,
  savedMovies,
  handleRemoveFromSaved,
  isSavedMoviesPage,
  setIsSavedMoviesPage,
  filterFilms,
  isShortFilm,
  setSearchedFilm,
  setIsShortFilm,
  isMovieSaved
  // isLiked,
  // setIsLiked
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);
  setIsSavedMoviesPage(true);

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
          filterFilms={filterFilms}
          isSavedMoviesPage={isSavedMoviesPage}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          isShortFilm={isShortFilm}
          setSearchedFilm={setSearchedFilm}
          setIsShortFilm={setIsShortFilm}
        />
        {savedMovies && (
          <MoviesCardList
            films={savedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            isSavedMoviesPage={isSavedMoviesPage}
            setIsSavedMoviesPage={setIsSavedMoviesPage}
            // isMovieSaved={isMovieSaved}
            // isLiked={isLiked}
            // setIsLiked={setIsLiked}
          />
        )}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default SavedMovies;
