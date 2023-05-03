import React from 'react';
import logo from '../../images/logo.svg';
import '../../index.css';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="register">
      <form className="register-form">
        <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label className="register-form__field">
          Имя
          <input
            className="register-form__item"
            name="name"
            value="Виталий"
            required
          />
          <span class="register-form__item-error name-input-error"></span>
        </label>
        <label className="register-form__field">
          E-mail
          <input
            className="register-form__item"
            type="email"
            name="email"
            value="pochta@yandex.ru"
            required
          />
          <span class="register-form__item-error email-input-error"></span>
        </label>
        <label className="register-form__field">
          Пароль
          <input
            className="register-form__item register-form__item_type_error"
            type="password"
            name="password"
            value="11111111111"
            required
          />
          <span class="register-form__item-error email-input-error">Что-то пошло не так...</span>
        </label>
        <button
          className="register-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
        >
          Зарегистрироваться
        </button>
        <span className="register-form__description">
          Уже зарегистрированы?
          <Link to="/sign-in" className="register-form__link">
            {' '}
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Register;
