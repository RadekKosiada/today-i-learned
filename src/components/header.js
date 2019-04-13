import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default () => {
  return (
    <header className="c-header">
      <nav className="c-header__nav">
        <div className="c-header__title">
          <span role="img" aria-label="Radek">
            🗓️
          </span>
          <span role="img" aria-label="learned">
            😄
          </span>
          <span role="img" aria-label="today">
            ✏️
          </span>
        </div>
        <Link to={'/tutorial/'} className="c-header__button o-btn">
          Set up your own!
        </Link>
      </nav>
    </header>
  );
};
