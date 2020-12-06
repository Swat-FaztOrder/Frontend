import React from 'react'

/* Components */
import LanguageButton from '../LanguageButton/index.jsx'
import Button from '../Button/index.jsx'

import './styles.styl'

/* Contants */
import BUTTONS from '../../utils/constants/buttons'
import { TOKEN } from '../../utils/constants/itemsLocalStorage'

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem(TOKEN)
    window.location.reload()
  }

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
          <Button onClick={handleClick} type={BUTTONS.CANCEL}>Log out</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
