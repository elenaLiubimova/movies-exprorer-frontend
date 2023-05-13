import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import '../../index.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import { moviesApi } from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import { mainApi } from '../../utils/MainApi';

const App = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowNavigation, setIsShowNavigation] = useState(true);

  const handleBurgerClick = () => {
    setPopupOpen(true);
  };

  // Функция регистрации
  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        navigate('/', { replace: true });
        return res;
      })
      .catch((err) => console.log(err));
  }

  // Функция авторизации
  function handleAuthorize(email, password) {
    return auth
      .authorize(email, password)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          navigate('/', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  }

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleAddToSaved = (movie) => {
    if (saved.find((savedMovie) => savedMovie._id === savedMovie._id)) {
      mainApi
        .deleteMovieFromSaved(_id)
        .then(
          setSaved((prev) =>
            prev
              .filter((item) => item.itemId !== card.itemId)
              .catch((error) => console.log(`Ошибка: ${error}`))
          )
        );
    } else {
      mainApi
        .addMovieToSaved(_id)
        .then(setSaved((prev) => [...prev, data]))
        .catch((error) => console.log(`Ошибка: ${error}`));
    }
  };

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
            films={films}
            setFilms={setFilms}
            isPopupOpen={isPopupOpen}
            openPopup={handleBurgerClick}
            closePopup={closePopup}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            isShowNavigation={isShowNavigation}
            setIsShowNavigation={setIsShowNavigation}
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
      <Route
        path="/signup"
        element={<Register handleRegister={handleRegister} />}
      />
      <Route
        path="/signin"
        element={<Login handleAuthorize={handleAuthorize} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
