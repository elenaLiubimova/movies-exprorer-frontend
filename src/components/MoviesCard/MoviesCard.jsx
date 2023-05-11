import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt="Обложка фильма" />
      <h2 className="card__title">{card.nameRU}</h2>
      <button
        className={isLiked ? `card__like card__like_active` : `card__like`}
        onClick={onLike}
        type="button"
      />
      <p className="card__duration">{card.duration}</p>
    </li>
  );
};

export default MoviesCard;
