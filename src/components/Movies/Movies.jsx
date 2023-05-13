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
  setIsShowNavigation
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);
  // const [films, setFilms] = useState(null);
  const [searchedFilm, setSearchedFilm] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);

  const searchMovies = () => {
    moviesApi
      .getFilms()
      .then((films) => setFilms(films))
      .catch((error) => console.log(`Ошибка: ${error}`))
  };

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
          searchedFilm={searchedFilm}
          setSearchedFilm={setSearchedFilm}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
        {/* {films ? <MoviesCardList films={films} searchedFilm={searchedFilm} /> : <Preloader />} */}
        {films && <MoviesCardList films={films} searchedFilm={searchedFilm} isShortFilm={isShortFilm} />}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Movies;
