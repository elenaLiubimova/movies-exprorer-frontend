import React from 'react';
import './MoviesCard.css';
import words from '../../images/words.png';
import like from '../../images/like.svg';

const MoviesCard = () => {
  return (
    <div className="card">
      <img className="card__image" src={words} alt="Обложка фильма" />
      <h2 className="card__title">33 слова о дизайне</h2>
      <img className="card__like" src={like} alt="Иконка лайка" />
      <p className="card__duration">1ч42м</p>
    </div>
  );
};

export default MoviesCard;
