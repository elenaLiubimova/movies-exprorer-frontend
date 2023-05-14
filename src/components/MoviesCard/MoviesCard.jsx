import React, { useState } from 'react';
import './MoviesCard.css';
import { filmApiUrl } from '../../utils/constants';
import { timeConverter } from '../../utils/utils';

const MoviesCard = ({ film, handleAddToSaved }) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLike = () => {
    setIsLiked(!isLiked);
    handleAddToSaved(film);
  };

  return (
    <li className="card">
      <a
        className="card__link"
        target="_blank"
        // href={film.trailerLink}
        href={film.trailer}
      >
        <img
          className="card__image"
          // src={filmApiUrl + film.image.url}
          src={film.image}
          alt="Обложка фильма"
        />
        <h2 className="card__title">{film.nameRU}</h2>
        <button
          className={isLiked ? `card__like card__like_active` : `card__like`}
          onClick={onLike}
          type="button"
        />
        <p className="card__duration">{timeConverter(film.duration)}</p>
      </a>
    </li>
  );
};

export default MoviesCard;
