import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';

const Login = ({ handleAuthorize, isLoading }) => {
  const { values, isValid, errors, handleChange } =
    useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!values.email || !values.password) {
      return;
    }
    handleAuthorize(values.email, values.password);
  };

  return (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <Link to="/">
          <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
        </Link>
        <h2 className="login-form__title">Рады видеть!</h2>
        <label className="login-form__field">
          E-mail
          <input
            className="login-form__item"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </label>
        <label className="login-form__field">
          Пароль
          <input
            className="login-form__item"
            type="password"
            placeholder="Пароль"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className="login-form__item-error password-input-error">
            {((errors.email || errors.password) && 'Что-то пошло не так...') ||
              ''}
          </span>
        </label>
        <button
          className="login-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
          disabled={!isValid}
        >
          Войти
        </button>
        <span className="login-form__description">
          Еще не зарегистрированы?
          <Link to="/signup" className="login-form__link">
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Login;
