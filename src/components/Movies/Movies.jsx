import React from 'react';
import Search from '../Search/Search';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { initialCards } from '../../utils/constants';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  isShowNavigation,
  setIsShowNavigation,
  films
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);

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
        <Search />
        {films ? <MoviesCardList films={films} /> : <Preloader />}
      </main>
      <Footer />
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Movies;
