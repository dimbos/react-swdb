import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        Что-то случилось
      </span>
      <span>
        (Роботы уже занимаются устранением ошибки)
      </span>
    </div>
  );
};

export default ErrorIndicator;
