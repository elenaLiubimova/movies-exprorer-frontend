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
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);
  const [searchedFilm, setSearchedFilm] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [showedMovies, setShowedMovies] = useState([]);
  // const [numberOfShowingMovies, setNumberOfShowingMovies] = useState(8);
  // const [startIndexOfMovies, setStartIndexOfMovies] = useState(0);
  // const [numberOfUploadingMovies, setNumberOfUploadingMovies] = useState(3);

  const toggleShortFilm = (films) => {
    if (isShortFilm) {
      return films.filter((film) => film.duration <= 40);
    } else return films;
  };

  const filterFilms = (films) => {
    const filteredFilms = toggleShortFilm(films).filter((film) =>
      film.nameRU.toLowerCase().includes(searchedFilm.toLowerCase())
    );
    return filteredFilms; 
  };

  const filteredFilms = films && filterFilms(films);

  const searchMovies = () => {
    moviesApi
      .getFilms()
      .then((films) => setFilms(films))
      .catch((error) => console.log(`Ошибка: ${error}`));
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
        {/* {films ? <MoviesCardList films={films} searchedFilm={searchedFilm} handleAddToSaved={handleAddToSaved} /> : <Preloader />} */}
        {films && (
          <MoviesCardList
            films={films}
            searchedFilm={searchedFilm}
            isShortFilm={isShortFilm}
            handleAddToSaved={handleAddToSaved}
            filteredFilms={filteredFilms}
          />
        )}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Movies;
