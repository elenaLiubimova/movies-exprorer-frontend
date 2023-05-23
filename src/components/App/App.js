import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import '../../index.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { FILM_API_URL } from '../../utils/constants';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { searchMovies } from '../../utils/utils';

const App = () => {
  let navigate = useNavigate();
  const [films, setFilms] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowNavigation, setIsShowNavigation] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isApiError, setIsApiError] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipIcon, setinfoTooltipIcon] = useState(null);
  const [infoTooltipDescription, setinfoTooltipDescription] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState(savedMovies);
  const [enteredToInputMovie, setEnteredToInputMovie] = useState('');
  const [isMoviesPage, setIsMoviesPage] = useState(true);

  const location = useLocation();

  const handleBurgerClick = () => {
    setPopupOpen(true);
  };

  const showError = (err) => {
    console.log(err);
    setinfoTooltipIcon(fail);
    setinfoTooltipDescription('Что-то пошло не так! Попробуйте еще раз.');
    setInfoTooltipOpen(true);
  };

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      if (token) {
        auth
          .checkToken(token)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((error) => console.log(`Ошибка: ${error}`));
      }
    }
  };

  // Функция регистрации
  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then((res) => {
        handleAuthorize(email, password);
      })
      .catch((err) => showError(err))
      .finally(() => setIsLoading(false));
  };

  // Функция авторизации
  const handleAuthorize = (email, password) => {
    setIsLoading(true);
    return auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.jwt);
        navigate('/movies');
        setLoggedIn(true);
        setinfoTooltipIcon(success);
        setinfoTooltipDescription('Добро пожаловать!');
        setInfoTooltipOpen(true);
      })
      .catch((err) => showError(err))
      .finally(() => setIsLoading(false));
  };

  // Функция обновления данных профиля
  const handleUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        setinfoTooltipIcon(success);
        setinfoTooltipDescription('Данные успешно обновлены!');
        setInfoTooltipOpen(true);
      })
      .catch((err) => showError(err))
      .finally(() => setIsLoading(false));
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const closeTooltip = () => {
    setInfoTooltipOpen(false);
  };

  const handleAddToSaved = (movie) => {
    const token = localStorage.getItem('jwt');
    mainApi
      .addMovieToSaved(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        FILM_API_URL + movie.image.url,
        movie.trailerLink,
        movie.nameRU,
        movie.nameEN,
        FILM_API_URL + movie.image.formats.thumbnail.url,
        movie.id,
        token
      )
      .then((savedMovie) => {
        setSavedMovies((prev) => [...prev, savedMovie]);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const handleRemoveFromSaved = (movie) => {
    let id;
    const token = localStorage.getItem('jwt');
    if (!movie._id) {
      id = savedMovies.find(
        (removingMovie) => removingMovie.movieId === movie.id
      )._id;
    } else id = movie._id;
    mainApi
      .deleteMovieFromSaved(id, token)
      .then(() => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((movie) => movie._id !== id)
        );
        setSearchedSavedMovies((savedMovies) =>
          savedMovies.filter((movie) => movie._id !== id)
        );
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  };

  const searchMoviesByValue = (searchValue, movies) => {
    setIsSearch(true);
    if (isMoviesPage) {
      setEnteredToInputMovie(searchValue);
      localStorage.setItem('enteredToInputMovie', searchValue);
      const currentSearchedMovies = searchMovies(movies, searchValue);
      setSearchedMovies(currentSearchedMovies);
      localStorage.setItem(
        'searchedMovies',
        JSON.stringify(currentSearchedMovies)
      );
    } else {
      const currentSearchedMovies = searchMovies(savedMovies, searchValue);
      setSearchedSavedMovies(currentSearchedMovies);
    }
  };

  const handleSearchMovies = (searchValue) => {
    if (films.length === 0 && isMoviesPage) {
      setIsLoading(true);
      setIsApiError(false);
      moviesApi
        .getFilms()
        .then((filmsData) => {
          setFilms(filmsData);
          searchMoviesByValue(searchValue, filmsData);
        })
        .catch((error) => {
          console.log(error);
          setIsApiError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      searchMoviesByValue(searchValue, films);
    }
  };

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      const token = localStorage.getItem('jwt');
      Promise.all([
        mainApi.getSavedMovies(token),
        mainApi.getCurrentUser(token),
      ])
        .then(([savedMoviesData, currentUserData]) => {
          setSavedMovies(savedMoviesData);
          setCurrentUser(currentUserData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  // Функция эффекта для Escape
  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
        closeTooltip();
      }
    };
    if (isPopupOpen || isInfoTooltipOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isPopupOpen, isInfoTooltipOpen]);

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
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isApiError={isApiError}
              isSearch={isSearch}
              setIsSearch={setIsSearch}
              onSearchMovies={handleSearchMovies}
              searchedMovies={searchedMovies}
              setSearchedMovies={setSearchedMovies}
              enteredToInputMovie={enteredToInputMovie}
              setEnteredToInputMovie={setEnteredToInputMovie}
              isMoviesPage={isMoviesPage}
              setIsMoviesPage={setIsMoviesPage}
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
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isSearch={isSearch}
              setIsSearch={setIsSearch}
              isApiError={isApiError}
              setIsShowNavigation={setIsShowNavigation}
              onSearchMovies={handleSearchMovies}
              setIsMoviesPage={setIsMoviesPage}
              searchedSavedMovies={searchedSavedMovies}
              setSearchedSavedMovies={setSearchedSavedMovies}
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
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setSavedMovies={setSavedMovies}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/signup"
          element={<Register handleRegister={handleRegister} isLoading={isLoading} />}
        />
        <Route
          path="/signin"
          element={
            <Login handleAuthorize={handleAuthorize} isLoading={isLoading} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        infoTooltipIcon={infoTooltipIcon}
        infoTooltipDescription={infoTooltipDescription}
        onClose={closeTooltip}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
