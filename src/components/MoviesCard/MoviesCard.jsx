import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import { filmApiUrl } from '../../utils/constants';
import { timeConverter } from '../../utils/utils';

const MoviesCard = ({
  film,
  handleAddToSaved,
  trailerLink,
  imageUrl,
  savedMovies,
  handleRemoveFromSaved,
  isMovieSaved,
  isSavedMoviesPage,
  setIsSavedMoviesPage,
  // isLiked,
  // setIsLiked
}) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isMovieSaved(film)) {
      setIsLiked(true);
    }
    // isSavedMoviesPage && setIsLiked(true);
  }, []);

  const onLike = () => {
    if (isLiked) {
      handleRemoveFromSaved(film);
      setIsLiked(false);
    } else {
      const notRepeatMovie = savedMovies.find(
        (savedMovie) => savedMovie.movieId === film.id
      );
      !notRepeatMovie && handleAddToSaved(film);
      setIsLiked(true);
    }
    // setIsLiked(!isLiked);
  };

  const onDelete = () => {
    handleRemoveFromSaved(film);
  };

  return (
    <li className="card">
      <a
        className="card__link"
        target="_blank"
        href={film.trailerLink || film.trailer}
      >
        <img
          className="card__image"
          src={isSavedMoviesPage ? film.image : filmApiUrl + film.image.url}
          alt="Обложка фильма"
        />
      </a>
      <h2 className="card__title">{film.nameRU}</h2>
      {!isSavedMoviesPage && (
        <button
          className={
            isLiked
              ? `card__button card__button_type_like card__button_type_like_active`
              : `card__button card__button_type_like`
          }
          onClick={onLike}
          type="button"
        />
      )}
      {isSavedMoviesPage && (
        <button
          className={'card__button card__button_type_delete'}
          onClick={onDelete}
          type="button"
        />
      )}
      <p className="card__duration">{timeConverter(film.duration)}</p>
    </li>
  );
};

export default MoviesCard;
