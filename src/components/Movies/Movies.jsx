import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import NoMoviesInfoBlock from '../NoMoviesInfoBlock/NoMoviesInfoBlock';
import { toggleShortMovie } from '../../utils/utils';
import { API_ERROR, NOT_FOUND_MOVIES } from '../../utils/constants';

const Movies = ({
  films,
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  isShowNavigation,
  setIsShowNavigation,
  handleAddToSaved,
  isShortFilm,
  setIsShortFilm,
  savedMovies,
  handleRemoveFromSaved,
  isLoading,
  isApiError,
  isSearch,
  setIsSearch,
}) => {
  const [isMoviesPage, setIsMoviesPage] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [enteredToInputMovie, setEnteredToInputMovie] = useState('');

  useEffect(() => {
    const searchedMoviesSavedInLocalStorage = JSON.parse(
      localStorage.getItem('searchedMovies')
    );
    setSearchedMovies(searchedMoviesSavedInLocalStorage);
    setIsShowNavigation(false);
  }, []);

  useEffect(() => {
    const toggledSearchedMovies =
      searchedMovies && toggleShortMovie(searchedMovies, isShortFilm);
    setFilteredMovies(toggledSearchedMovies);
  }, [searchedMovies, isShortFilm]);

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
          enteredToInputMovie={enteredToInputMovie}
          setEnteredToInputMovie={setEnteredToInputMovie}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          searchedMovies={searchedMovies}
          setSearchedMovies={setSearchedMovies}
          films={films}
          isMoviesPage={isMoviesPage}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
        {isLoading && <Preloader />}
        {isApiError && isSearch && (
          <NoMoviesInfoBlock infoMessage={API_ERROR} />
        )}
        {!isApiError && filteredMovies && filteredMovies.length !== 0
          ? !isLoading && (
              <MoviesCardList
                handleAddToSaved={handleAddToSaved}
                films={filteredMovies}
                savedMovies={savedMovies}
                handleRemoveFromSaved={handleRemoveFromSaved}
              />
            )
          : !isApiError && <NoMoviesInfoBlock infoMessage={NOT_FOUND_MOVIES} />}
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
