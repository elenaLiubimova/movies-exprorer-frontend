import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { mainApi } from '../../utils/MainApi';
import { toggleShortMovie } from '../../utils/utils';

const SavedMovies = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  setSavedMovies,
  savedMovies,
  handleRemoveFromSaved,
  filterFilms,
  isShortFilm,
  setSearchedFilm,
  setIsShortFilm,
}) => {
  const [isSavedMoviesPage, setIsSavedMoviesPage] = useState(true);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  // setLoggedIn(true);
  // setIsShowNavigation(false);
  // setIsSavedMoviesPage(true);

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((savedMovies) => setSavedMovies(savedMovies))
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  useEffect(() => {
    const toggledSavedMovies = toggleShortMovie(savedMovies, isShortFilm);
    setFilteredSavedMovies(toggledSavedMovies);
  }, [savedMovies, isShortFilm]);

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
          getSavedMovies={getSavedMovies}
        />
        {filteredSavedMovies && (
          <MoviesCardList
            films={filteredSavedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            isSavedMoviesPage={isSavedMoviesPage}
            setIsSavedMoviesPage={setIsSavedMoviesPage}
          />
        )}
      </main>
      <Footer />
      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        isSavedMoviesPage={isSavedMoviesPage}
      />
    </>
  );
};

export default SavedMovies;
