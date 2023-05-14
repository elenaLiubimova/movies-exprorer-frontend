import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const Register = ({ handleRegister }) => {
  // const { values, handleChange } = useForm({});
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.validationMessage)
    setValues({ ...values, [name]: value });
    setFormErrors(validate(event, values));
  };
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = values;
    handleRegister(name, email, password);
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(values);
  //   }
  // }, [formErrors])

  const validate = (event, values) => {
    const errors = {};
    console.log(event.target)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // if (!values.name || values.name.length < 2 || values.name.length > 40) {
    //   errors.name = event.target.validationMessage;
    // } 
    // if (!values.email || !emailRegex.test(values.email)) {
    //   errors.email = event.target.validationMessage;
    // }
    // if (!values.password) {
    //   errors.password = event.target.validationMessage;
    // }
    errors.name = event.target.validationMessage;
    return errors;
  }

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
            required
          />
          <span className="register-form__item-error name-input-error">{formErrors.name}</span>
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
            required
          />
          <span className="register-form__item-error email-input-error">{formErrors.email}</span>
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
            required
          />
          <span className="register-form__item-error email-input-error">{formErrors.password}</span>
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
          <Link to="/signin" className="register-form__link">
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Register;
