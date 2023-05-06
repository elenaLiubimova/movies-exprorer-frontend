import React, { useState } from 'react';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { AppContext } from '../../contexts/AppContext';
import '../../index.css';

const App = () => {
  // Переменная статуса пользователя
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
