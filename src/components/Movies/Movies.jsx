import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';
import { toggleShortMovie } from '../../utils/utils';

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
  isShortFilm,
  setIsShortFilm,
  savedMovies,
  handleRemoveFromSaved,
}) => {
  const [isMoviesPage, setIsMoviesPage] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [enteredToInputMovie, setEnteredToInputMovie] = useState('');

  const getMovies = () => {
    moviesApi
      .getFilms()
      .then((films) => setFilms(films))
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  useEffect(() => {
    const searchedMoviesSavedInLocalStorage = JSON.parse(localStorage.getItem('searchedMovies'));
    setSearchedMovies(searchedMoviesSavedInLocalStorage);

    const filterStateSavedInLocalStorage = localStorage.getItem('filter');
    setIsShortFilm(filterStateSavedInLocalStorage);
  }, []);
  
  useEffect(() => {
    const toggledSearchedMovies = toggleShortMovie(searchedMovies, isShortFilm);
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
          getMovies={getMovies}
          enteredToInputMovie={enteredToInputMovie}
          setEnteredToInputMovie={setEnteredToInputMovie}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          searchedMovies={searchedMovies}
          setSearchedMovies={setSearchedMovies}
          films={films}
          isMoviesPage={isMoviesPage}
        />
        {films ? (
          <MoviesCardList
            handleAddToSaved={handleAddToSaved}
            films={filteredMovies}
            savedMovies={savedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
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
