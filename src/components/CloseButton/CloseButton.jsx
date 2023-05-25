import React from 'react';
import './CloseButton.css';

const CloseButton = ({ onClose }) => {
  return (
    <button
      className="close-button"
      type="button"
      aria-label="Кнопка закрытия"
      onClick={onClose}
    />
  );
};

export default CloseButton;
