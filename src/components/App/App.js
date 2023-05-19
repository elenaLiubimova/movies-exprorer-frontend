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
import { filmApiUrl } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowNavigation, setIsShowNavigation] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [savedMovies, setSavedMovies] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleBurgerClick = () => {
    setPopupOpen(true);
  };

  // Функция регистрации
  const handleRegister = (name, email, password) => {
    auth
      .register(name, email, password)
      .then((res) => {
        auth
          .authorize(email, password)
          .then((res) => {
            localStorage.setItem('jwt', res.jwt);
            setLoggedIn(true);
            navigate('/movies', { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  // Функция авторизации
  const handleAuthorize = (email, password) => {
    return auth
      .authorize(email, password)
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('jwt', data.jwt);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  // Функция обновления данных профиля
  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => setIsLoading(false));
  }

  //Функция проверки токена
  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      if (token) {
        auth
          .checkToken()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((error) => console.log(`Ошибка: ${error}`));
      }
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleAddToSaved = (movie) => {
    mainApi
      .addMovieToSaved(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        filmApiUrl + movie.image.url,
        movie.trailerLink,
        movie.nameRU,
        movie.nameEN,
        filmApiUrl + movie.image.formats.thumbnail.url,
        movie.id
      )
      .then((savedMovie) => {
        setSavedMovies((prev) => [...prev, savedMovie]);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const handleRemoveFromSaved = (movie) => {
    let id;
    if (!movie._id) {
      id = savedMovies.find(
        (removingMovie) => removingMovie.movieId === movie.id
      )._id;
    } else id = movie._id;
    mainApi
      .deleteMovieFromSaved(id)
      .then(() => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((movie) => movie._id !== id)
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      Promise.all([
        moviesApi.getFilms(),
        mainApi.getSavedMovies(),
        mainApi.getCurrentUser(),
      ])
        .then(([films, savedMovies, currentUser]) => {
          setFilms(films);
          setSavedMovies(savedMovies);
          setCurrentUser(currentUser);
        })
        .catch((error) => {
          console.log(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

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
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isShowNavigation={isShowNavigation}
              setIsShowNavigation={setIsShowNavigation}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              isPopupOpen={isPopupOpen}
              openPopup={handleBurgerClick}
              closePopup={closePopup}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              component={Movies}
              films={films}
              setFilms={setFilms}
              isPopupOpen={isPopupOpen}
              openPopup={handleBurgerClick}
              closePopup={closePopup}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              isShowNavigation={isShowNavigation}
              setIsShowNavigation={setIsShowNavigation}
              handleAddToSaved={handleAddToSaved}
              isShortFilm={isShortFilm}
              setIsShortFilm={setIsShortFilm}
              savedMovies={savedMovies}
              handleRemoveFromSaved={handleRemoveFromSaved}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              component={SavedMovies}
              isPopupOpen={isPopupOpen}
              openPopup={handleBurgerClick}
              closePopup={closePopup}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setSavedMovies={setSavedMovies}
              isShortFilm={isShortFilm}
              setIsShortFilm={setIsShortFilm}
              savedMovies={savedMovies}
              handleRemoveFromSaved={handleRemoveFromSaved}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              component={Profile}
              isPopupOpen={isPopupOpen}
              openPopup={handleBurgerClick}
              closePopup={closePopup}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setIsShowNavigation={setIsShowNavigation}
              onUpdateUser={handleUpdateUser}
              setFilms={setFilms}
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
    </CurrentUserContext.Provider>
  );
};

export default App;
