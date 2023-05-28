import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://elenaliubimova.github.io/how-to-learn/"
          >
            <span className="portfolio__link-text">Статичный сайт</span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://elenaliubimova.github.io/russian-travel/"
          >
            <span className="portfolio__link-text">Адаптивный сайт</span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://danakun.github.io/competition/"
          >
            <span className="portfolio__link-text">
              Адаптивный сайт (командная работа)
            </span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://elenaliubimova.github.io/mesto-react/"
          >
            <span className="portfolio__link-text">
              Одностраничное приложение (React)
            </span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://weather-app2.surge.sh/"
          >
            <span className="portfolio__link-text">
              Одностраничное приложение (React, geolocation)
            </span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://helpful-queijadas-408f30.netlify.app/"
          >
            <span className="portfolio__link-text">
              Одностраничное приложение (Typescript, React, Redux Toolkit)
            </span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
        <li className="portfolio__element">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://elenaliubimova.github.io/snake-game/"
          >
            <span className="portfolio__link-text">
              Игра "Змейка" (Typescript, ООП)
            </span>
            <img
              className="portfolio__arrow"
              src={arrow}
              alt="иконка-стрелка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
