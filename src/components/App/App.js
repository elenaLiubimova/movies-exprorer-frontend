import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import '../../index.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import { moviesApi } from '../../utils/MoviesApi';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowNavigation, setIsShowNavigation] = useState(true);
  const [films, setFilms] = useState(null);
  console.log(films)

  const handleBurgerClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Функция эффекта для данных фильмов
  useEffect(() => {
    moviesApi
      .getFilms()
      .then((films) => setFilms(films))
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, []);

  // Функция эффекта для Escape
  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    };
    if (isPopupOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isPopupOpen]);

  return (
    <Routes>
      <Route
        path="/"
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        element={
          <Main
            isShowNavigation={isShowNavigation}
            setIsShowNavigation={setIsShowNavigation}
          />
        }
      />
      <Route
        path="/movies"
        element={
          <Movies
            isPopupOpen={isPopupOpen}
            openPopup={handleBurgerClick}
            closePopup={closePopup}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            isShowNavigation={isShowNavigation}
            setIsShowNavigation={setIsShowNavigation}
            films={films}
            setFilms={setFilms}
          />
        }
      />
      <Route
        path="/saved-movies"
        element={
          <SavedMovies
            isPopupOpen={isPopupOpen}
            openPopup={handleBurgerClick}
            closePopup={closePopup}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setIsShowNavigation={setIsShowNavigation}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <Profile
            isPopupOpen={isPopupOpen}
            openPopup={handleBurgerClick}
            closePopup={closePopup}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setIsShowNavigation={setIsShowNavigation}
          />
        }
      />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
