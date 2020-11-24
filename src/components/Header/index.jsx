import React from 'react'

import './styles.styl'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1>Fast <strong>ORDER</strong></h1>
      </div>
      <div className="header__right">
        <a href="" className="header__right--grid">
          <i className="fas fa-th" />
        </a>
        <a href="" className="header__right--basket">
          <i className="fas fa-shopping-basket" />
        </a>
        <a href="" className="header__right--more">
          <i className="fas fa-angle-down" />
        </a>
      </div>
    </header>
  )
}

export default Header
