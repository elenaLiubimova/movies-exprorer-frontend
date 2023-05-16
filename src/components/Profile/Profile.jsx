import React, { useContext } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

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
  const currentUser = useContext(CurrentUserContext);

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/', { replace: true });
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
        <form className="profile-form">
          <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>
          <label className="profile-form__field">
            <span className="profile-form__label">Имя</span>
            <input
              className="profile-form__item"
              type="text"
              placeholder="Имя"
              name="name"
              value={currentUser.name || ''}
              // onChange={handleChange}
              required
            />
            <span className="profile-form__item-error name-input-error"></span>
          </label>
          <label className="profile-form__field">
            <span className="profile-form__label">E-mail</span>
            <input
              className="profile-form__item profile-form__item_last"
              type="email"
              placeholder="Email"
              name="email"
              value={currentUser.email || ''}
              // onChange={handleChange}
              required
            />
            <span className="profile-form__item-error email-input-error"></span>
          </label>
          <button className="profile-form__button">Редактировать</button>
          <button
            className="profile-form__button profile-form__button_escape"
            onClick={signOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </main>
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Profile;
