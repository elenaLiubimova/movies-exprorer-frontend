import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards } from '../../utils/constants';

const MoviesCardList = ({cards}) => {
  return (
    <section className="movies-container">
      <ul className="movies-container__cards">
        {/* Отрисовка карточек из массива */}
        {cards.map((card, i) => (
          <MoviesCard card={card} />
        ))}
      </ul>
      <button className="movies-container__more-button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
