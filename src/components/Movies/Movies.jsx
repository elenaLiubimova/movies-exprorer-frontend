import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = ({
  films,
  setFilms,
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  isShowNavigation,
  setIsShowNavigation,
  handleAddToSaved,
  filterFilms,
  searchedFilm,
  setSearchedFilm,
  isShortFilm,
  setIsShortFilm,
  savedMovies,
  handleRemoveFromSaved,
}) => {
  const [isMoviesPage, setIsMoviesPage] = useState(true);
  setIsShowNavigation(false);

  const searchMovies = () => {
    moviesApi
      .getFilms()
      .then((films) => setFilms(films))
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const filteredFilms = filterFilms(films);

  return (
    <>
      <Header
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        closePopup={closePopup}
        isShowNavigation={isShowNavigation}
        setIsShowNavigation={setIsShowNavigation}
      />
      <main className="movies">
        <Search
          searchMovies={searchMovies}
          setSearchedFilm={setSearchedFilm}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          searchedFilm={searchedFilm}
        />
        {/* {films ? <MoviesCardList films={films} searchedFilm={searchedFilm} handleAddToSaved={handleAddToSaved} /> : <Preloader />} */}
        {films ? (
          <MoviesCardList
            searchedFilm={searchedFilm}
            isShortFilm={isShortFilm}
            handleAddToSaved={handleAddToSaved}
            films={filteredFilms}
            savedMovies={savedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            // isLiked={isLiked}
            // setIsLiked={setIsLiked}
          />
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        isMoviesPage={setIsMoviesPage}
      />
    </>
  );
};

export default Movies;
