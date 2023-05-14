import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';

const Profile = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  setIsShowNavigation,
}) => {
  setLoggedIn(true);
  setIsShowNavigation(false);
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  return (
    <>
      <Header
        isPopupOpen={isPopupOpen}
        openPopup={openPopup}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        closePopup={closePopup}
      />
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
        <button className="profile__escape" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </main>
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Profile;
