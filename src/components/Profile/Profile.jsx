import React from 'react';
import '../../index.css';
import './Profile.css';

const Profile = () => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <ul className="profile__list">
        <li className="profile__element">
          <p className="profile__param">Имя</p>
          <p className="profile__value">Виталий</p>
        </li>
        <li className="profile__element">
          <p className="profile__param">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </li>
      </ul>
      <a className="profile__edit">Редактировать</a>
      <a className="profile__escape">Назад</a>
    </main>
  );
}

export default Profile;