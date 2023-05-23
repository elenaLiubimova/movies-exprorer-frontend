import React from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';

const Register = ({ handleRegister, isLoading }) => {
  const { values, isValid, errors, handleChange } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!values.name || !values.email || !values.password) {
      return;
    }
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <main className="register">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <Link to="/">
          <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
        </Link>
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label className="register-form__field">
          Имя
          <input
            className="register-form__item"
            name="name"
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            disabled={isLoading}
            required
          />
        </label>
        <label className="register-form__field">
          E-mail
          <input
            className="register-form__item"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </label>
        <label className="register-form__field">
          Пароль
          <input
            className="register-form__item"
            type="password"
            placeholder="Пароль"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
          <span className="register-form__item-error email-input-error">
            {(errors.name ||
              errors.email ||
              errors.password) && 'Что-то пошло не так...' ||
              ''}
          </span>
        </label>
        <button
          className="register-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <span className="register-form__description">
          Уже зарегистрированы?
          <Link to="/signin" className="register-form__link">
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Register;
