import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
  handleAddToSaved,
  films,
  savedMovies,
  handleRemoveFromSaved,
  isSavedMoviesPage,
  setIsSavedMoviesPage,
  isLiked,
  setIsLiked,
}) => {
  const [numberOfShowingMovies, setNumberOfShowingMovies] = useState(12);
  const [numberOfUploadingMovies, setNumberOfUploadingMovies] = useState(4);

  const onUploadMovies = () => {
    setNumberOfShowingMovies(numberOfShowingMovies + numberOfUploadingMovies);
  };

  const handleWindowWidthChange = () => {
    if (window.innerWidth > 768) {
      setNumberOfShowingMovies(12);
      setNumberOfUploadingMovies(4);
    } else if (window.innerWidth <= 768 && window.innerWidth > 480) {
      setNumberOfShowingMovies(8);
      setNumberOfUploadingMovies(2);
    } else {
      setNumberOfShowingMovies(5);
      setNumberOfUploadingMovies(2);
    }
  };

  useEffect(() => {
    let timeout;

    const handleWindowWidthChangeWithResize = () => {
      timeout = setTimeout(handleWindowWidthChange, 1000);
    };

    window.addEventListener('resize', handleWindowWidthChangeWithResize);
    return () => {
      window.removeEventListener('resize', handleWindowWidthChangeWithResize);
      clearTimeout(timeout);
    };
  });

  const isMovieSaved = (movie) => {
    return savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);
  };

  return (
    <section className="movies-container">
      <ul className="movies-container__cards">
        {films &&
          films
            .map((film) => (
              <MoviesCard
                film={film}
                key={film.id || film._id}
                handleAddToSaved={handleAddToSaved}
                savedMovies={savedMovies}
                handleRemoveFromSaved={handleRemoveFromSaved}
                isMovieSaved={isMovieSaved}
                isSavedMoviesPage={isSavedMoviesPage}
                setIsSavedMoviesPage={setIsSavedMoviesPage}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
              />
            ))
            .slice(0, numberOfShowingMovies)}
      </ul>
      {films &&
        films.length > numberOfShowingMovies &&
        films.length - numberOfShowingMovies != 0 && (
          <button
            className="movies-container__more-button"
            type="button"
            aria-label="Кнопка 'Еще'"
            onClick={onUploadMovies}
          >
            <span className="movies-container__more-button-text">Ещё</span>
          </button>
        )}
    </section>
  );
};

export default MoviesCardList;
