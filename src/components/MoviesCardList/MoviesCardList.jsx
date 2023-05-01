import React from 'react';
import '../../index.css';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialCards } from '../../utils/constants';

const MoviesCardList = () => {
  return (
    <section className="movies-container">
      <ul className="movies-container__cards">
        {/* Отрисовка карточек из массива */}
        {initialCards.map((card, i) => (
          <MoviesCard card={card} />
        ))}
      </ul>
      <button className="movies-container__more-button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
