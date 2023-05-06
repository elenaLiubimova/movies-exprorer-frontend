import React from 'react';
import logo from '../../images/logo.svg';
import '../../index.css';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className="login">
      <form className="login-form">
        <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
        <h2 className="login-form__title">Рады видеть!</h2>
        <label className="login-form__field">
          E-mail
          <input
            className="login-form__item"
            type="email"
            name="email"
            value="pochta@yandex.ru"
            required
          />
          <span class="login-form__item-error email-input-error"></span>
        </label>
        <label className="login-form__field">
          Пароль
          <input
            className="login-form__item"
            type="password"
            name="password"
            required
          />
          <span class="login-form__item-error email-input-error"></span>
        </label>
        <button
          className="login-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
        >
          Войти
        </button>
        <span className="login-form__description">
          Еще не зарегистрированы?
          <Link to="/sign-in" className="login-form__link">
            {' '}
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Login;