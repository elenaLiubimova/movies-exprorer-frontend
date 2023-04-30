import React from 'react';
import './AboutMe.css';
import '../../index.css';
import profile from '../../images/profile.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__info">
        <h3 className="about-me__title">Виталий</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about-me__github">Github</a>
      </div>
      <img className="about-me__photo" src={profile} alt="Фото профиля" />
    </section>
  );
};

export default AboutMe;
