import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
  return (
    <div className="card">
      <img className="card__image" src={card.image} alt="Обложка фильма" />
      <h2 className="card__title">{card.nameRU}</h2>
      <p className="card__like card__like_active" />
      <p className="card__duration">{card.duration}</p>
    </div>
  );
};

export default MoviesCard;
