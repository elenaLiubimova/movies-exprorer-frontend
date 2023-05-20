import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { toggleShortMovie } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';
import { MAIN_API_ERROR, NOT_FOUND_MOVIES } from '../../utils/constants';
import NoMoviesInfoBlock from '../NoMoviesInfoBlock/NoMoviesInfoBlock';

const SavedMovies = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  savedMovies,
  setSavedMovies,
  handleRemoveFromSaved,
  isShortFilm,
  setSearchedFilm,
  setIsShortFilm,
  isSearch,
  setIsSearch,
  isLoading,
  isApiError,
  setIsShowNavigation,
}) => {
  const [isSavedMoviesPage, setIsSavedMoviesPage] = useState(true);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  useEffect(() => {
    setIsShortFilm(false);
    setIsShowNavigation(false);
    setSavedMovies(savedMovies);
  }, []);

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
        setIsShowNavigation={setIsShowNavigation}
      />
      <main className="movies">
        <Search
          isSavedMoviesPage={isSavedMoviesPage}
          isShortFilm={isShortFilm}
          setSearchedFilm={setSearchedFilm}
          setIsShortFilm={setIsShortFilm}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
        {isLoading && <Preloader />}
        {isApiError && <NoMoviesInfoBlock infoMessage={MAIN_API_ERROR} />}
        {filteredSavedMovies && filteredSavedMovies.length !== 0 ? (
          <MoviesCardList
            films={filteredSavedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            isSavedMoviesPage={isSavedMoviesPage}
            setIsSavedMoviesPage={setIsSavedMoviesPage}
          />
        ) :
        (<NoMoviesInfoBlock infoMessage={NOT_FOUND_MOVIES} />)
        }
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
