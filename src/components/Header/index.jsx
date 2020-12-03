import React from 'react'

/* Components */
import LanguageButton from '../LanguageButton/index.jsx'
import LogoutButton from '../LogoutButton/index.jsx'

import './styles.styl'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1>Fast <strong>ORDER</strong></h1>
      </div>
      <div className="header__right">
        <LanguageButton />
        <a href="" className="header__right--grid">
          <i className="fas fa-th" />
        </a>
        <a href="" className="header__right--basket">
          <i className="fas fa-shopping-basket" />
        </a>
        <a href="" className="header__right--more">
          <i className="fas fa-angle-down" />
        </a>
        <div className="header__right--logout">
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}

export default Header
