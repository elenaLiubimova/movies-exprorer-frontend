import React from 'react';
import './AboutMe.css';
import profile from '../../images/profile.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section-title" id="about">Студент</h2>
      <div className="about-me__info">
        <h3 className="about-me__title">Лена</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
        <p className="about-me__description">
          Я закончила факультет радиоэлектроники летательных аппаратов МАИ и
          почти 6 лет проработала инженером в области систем управления
          космическими аппаратами. 
          В 2022 решила поменять сферу деятельности и
          выбрала фронтенд, потому что меня привлекают удобные и красивые
          интерфейсы и нравится создавать штуки, которые пользователь видит и с
          которыми можно активно взаимодействовать.
          Так я прошла обучение по
          программе "Веб-разработчик" в Яндекс Практикуме и теперь хочу
          развиваться дальше в коммерческой разработке.
        </p>
        <a
          className="about-me__github"
          target="_blank"
          href="https://github.com/elenaLiubimova"
        >
          Github
        </a>
      </div>
      <img className="about-me__photo" src={profile} alt="Фото студента" />
    </section>
  );
};

export default AboutMe;
