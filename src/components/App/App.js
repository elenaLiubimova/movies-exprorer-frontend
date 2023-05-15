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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowNavigation, setIsShowNavigation] = useState(true);
  const [searchedFilm, setSearchedFilm] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [savedMovies, setSavedMovies] = useState(null);

  const getSavedMovies = () => {
    mainApi
      .getSavedMovies()
      .then((movies) => setSavedMovies(movies))
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  useEffect(() => {
    getSavedMovies();
  }, []);

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

  //Функция проверки токена
  function tokenCheck() {
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
  }

  const closePopup = () => {
    setPopupOpen(false);
  };

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

  useEffect(() => {
    tokenCheck();
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
        element={
          <Main
            isShowNavigation={isShowNavigation}
            setIsShowNavigation={setIsShowNavigation}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
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
            filterFilms={filterFilms}
            searchedFilm={searchedFilm}
            setSearchedFilm={setSearchedFilm}
            isShortFilm={isShortFilm}
            setIsShortFilm={setIsShortFilm}
            savedMovies={savedMovies}
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
            setIsShowNavigation={setIsShowNavigation}
            setSavedMovies={setSavedMovies}
            searchedFilm={searchedFilm}
            setSearchedFilm={setSearchedFilm}
            isShortFilm={isShortFilm}
            setIsShortFilm={setIsShortFilm}
            savedMovies={savedMovies}
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
