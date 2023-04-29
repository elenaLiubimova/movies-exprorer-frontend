import React from 'react';
import './AboutProject.css';
import '../../index.css'

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="section-title">О проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__list-element">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__list-element">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="progress-bar"></div>
    </section>
  );
};

export default AboutProject;
