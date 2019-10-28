import React from 'react';
import { Link }  from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarWarsDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">Герои</Link>
        </li>
        <li>
          <Link to="/planets">Планеты</Link>
        </li>
        <li>
          <Link to="/starships">Корабли</Link>
        </li>
        <li>
          <Link to="/secret">Секретная страница</Link>
        </li>
        <li>
          <Link to="/login">Логин</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;