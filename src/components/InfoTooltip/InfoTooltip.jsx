import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import './InfoTooltip.css';

const InfoTooltip = ({
  infoTooltipIcon,
  infoTooltipDescription,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={
        isOpen
          ? `info-tooltip info-tooltip_opened info-tooltip_success`
          : `info-tooltip info-tooltip_success`
      }
      onClick={onClose}
    >
      <div
        className="info-tooltip__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <img
          className="info-tooltip__icon"
          src={infoTooltipIcon}
          alt="Иконка тултипа"
        />
        <p className="info-tooltip__description">{infoTooltipDescription}</p>
        <CloseButton onClose={onClose}/>
      </div>
    </div>
  );
};

export default InfoTooltip;
