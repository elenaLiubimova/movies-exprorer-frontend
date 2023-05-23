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
  onSearchMovies,
  setIsMoviesPage,
  searchedSavedMovies,
  setSearchedSavedMovies,
}) => {
  const [isSavedMoviesPage, setIsSavedMoviesPage] = useState(true);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  useEffect(() => {
    setIsMoviesPage(false);
    setIsShortFilm(false);
    setIsShowNavigation(false);
    setSearchedSavedMovies(savedMovies);
    const toggledSavedMovies = toggleShortMovie(
      searchedSavedMovies,
      isShortFilm
    );
    setFilteredSavedMovies(toggledSavedMovies);
  }, []);

  useEffect(() => {
    const toggledSavedMovies = toggleShortMovie(
      searchedSavedMovies,
      isShortFilm
    );
    setFilteredSavedMovies(toggledSavedMovies);
  }, [searchedSavedMovies, savedMovies, isShortFilm, isSavedMoviesPage]);

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
          onSearchMovies={onSearchMovies}
          isLoading={isLoading}
        />
        {isLoading && <Preloader />}
        {!isLoading && isApiError && (
          <NoMoviesInfoBlock infoMessage={MAIN_API_ERROR} />
        )}
        {!isLoading && !isApiError && 
        filteredSavedMovies &&
        filteredSavedMovies.length !== 0 ? (
          <MoviesCardList
            films={filteredSavedMovies}
            handleRemoveFromSaved={handleRemoveFromSaved}
            isSavedMoviesPage={isSavedMoviesPage}
            setIsSavedMoviesPage={setIsSavedMoviesPage}
          />
        ) : (
          !isLoading && !isApiError && <NoMoviesInfoBlock infoMessage={NOT_FOUND_MOVIES} />
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
