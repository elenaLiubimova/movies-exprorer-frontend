import React, { useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';

const Profile = ({
  openPopup,
  isPopupOpen,
  closePopup,
  loggedIn,
  setLoggedIn,
  setIsShowNavigation,
  onUpdateUser,
  setSavedMovies,
  setCurrentUser,
}) => {
  const { values, isValid, setValues, errors, handleChange } =
    useFormWithValidation({});
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  const signOut = () => {
    setLoggedIn(false);
    setSavedMovies([]);
    setCurrentUser({});
    localStorage.clear();
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setIsShowNavigation(false);
  }, []);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

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
        <form className="profile-form" onSubmit={handleSubmit} noValidate>
          <h1 className="profile-form__title">{`Привет, ${currentUser.name}!`}</h1>
          <label className="profile-form__field">
            <span className="profile-form__label">Имя</span>
            <input
              className="profile-form__item"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
          </label>
          <label className="profile-form__field">
            <span className="profile-form__label">E-mail</span>
            <input
              className="profile-form__item profile-form__item_last"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
          </label>
          <span className="profile-form__item-error profile-form__item-error_last email-input-error">
            {((errors.name || errors.email) && 'Что-то пошло не так...') || ''}
          </span>
          <button
            className="profile-form__button"
            type="submit"
            disabled={
              !isValid ||
              (currentUser.name === values.name &&
                currentUser.email === values.email)
            }
          >
            Редактировать
          </button>
          <button
            className="profile-form__button profile-form__button_escape"
            type="button"
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
