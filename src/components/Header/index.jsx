import React from 'react'

/* Components */
import LanguageButton from '../LanguageButton/index.jsx'
import Button from '../Button/index.jsx'

import './styles.styl'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1>Fast <strong>ORDER</strong></h1>
      </div>
      <div className="header__right">
        <div className="header__right--lang">
          <LanguageButton />
        </div>
        <a href="" className="header__right--grid">
          <i className="fas fa-th" />
        </a>
        <a href="" className="header__right--basket">
          <i className="fas fa-shopping-basket" />
        </a>
        <div className="header__right--logout">
          <Button />
        </div>
      </div>
    </header>
  )
}

export default Header
