import React from 'react';
import './Popup.css';
import NavTab from '../NavTab/NavTab';

const Popup = ({ isPopupOpen, closePopup }) => {
  return (
    <div
      className={isPopupOpen ? `popup popup_opened` : `popup`}
      onClick={closePopup}
    >
      <div
        className={`popup__container`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <NavTab popup={true} loggedIn={true} closePopup={closePopup} />
        <button
          className="popup__close-button"
          type="button"
          aria-label="Кнопка закрытия попапа"
          onClick={closePopup}
        />
      </div>
    </div>
  );
};

export default Popup;
