import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="jumbotron">
      <p>Войти для секретной страницы</p>
      <button
        className="btn btn-primary"
        onClick={onLogin}>
        Войти
      </button>
    </div>
  );
};

export default LoginPage;
