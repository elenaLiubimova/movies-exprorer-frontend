import React from 'react';
import './Portfolio.css';
import '../../index.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a className="portfolio__link">Статичный сайт</a>
          <img className="portfolio__arrow" src={arrow} alt="иконка-стрелка"/>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link">Адаптивный сайт</a>
          <img className="portfolio__arrow" src={arrow} alt="иконка-стрелка"/>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__authorized-link">Одностраничное приложение</a>
          <img className="portfolio__arrow" src={arrow} alt="иконка-стрелка"/>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;