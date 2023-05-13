import React, { useState } from 'react';
import './MoviesCard.css';
import { filmApiUrl } from '../../utils/constants';
import { timeConverter } from '../../utils/utils';

const MoviesCard = ({ film }) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <a
        className="card__link"
        target="_blank"
        href={film.trailerLink}
      >
        <img
          className="card__image"
          src={filmApiUrl + film.image.url}
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
