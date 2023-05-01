import React from 'react';
import './MoviesCard.css';
import words from '../../images/words.png';
import like from '../../images/like.svg';

const MoviesCard = ({ card }) => {
  return (
    <div className="card">
      <img className="card__image" src={card.image} alt="Обложка фильма" />
      <h2 className="card__title">{card.nameRU}</h2>
      <img className="card__like" src={like} alt="Иконка лайка" />
      <p className="card__duration">{card.duration}</p>
    </div>
  );
};

export default MoviesCard;
