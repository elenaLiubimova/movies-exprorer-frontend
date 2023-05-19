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
import { initialMoviesMessage, notFoundMovies } from '../../utils/constants';

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
}) => {
  const [isMoviesPage, setIsMoviesPage] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [enteredToInputMovie, setEnteredToInputMovie] = useState('');
  const [info, setInfo] = useState(initialMoviesMessage);

  useEffect(() => {
    const searchedMoviesSavedInLocalStorage = JSON.parse(
      localStorage.getItem('searchedMovies')
    );
    setSearchedMovies(searchedMoviesSavedInLocalStorage);
    setInfo(initialMoviesMessage);

    const filterStateSavedInLocalStorage = localStorage.getItem('filter');
    setIsShortFilm(filterStateSavedInLocalStorage);
  }, []);

  useEffect(() => {
    const toggledSearchedMovies = searchedMovies && toggleShortMovie(searchedMovies, isShortFilm);
    setFilteredMovies(toggledSearchedMovies);
    enteredToInputMovie && filteredMovies && filteredMovies.length === 0 && setInfo(notFoundMovies);
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
        />
        {isLoading && <Preloader />}
        {!isLoading && <NoMoviesInfoBlock infoMessage={info} />}
        {!isLoading && <MoviesCardList
          handleAddToSaved={handleAddToSaved}
          films={filteredMovies}
          savedMovies={savedMovies}
          handleRemoveFromSaved={handleRemoveFromSaved}
        />}
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
