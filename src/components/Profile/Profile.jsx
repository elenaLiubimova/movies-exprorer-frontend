import React from 'react';

const Profile = () => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <a className="profile__edit">Редактировать</a>
      <a className="profile__escape">Назад</a>
    </main>
  );
}

export default Profile;