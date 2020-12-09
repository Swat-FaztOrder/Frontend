import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

/* Components */
import LanguageButton from '../LanguageButton/index.jsx'
import Button from '../Button/index.jsx'

import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Contants */
import BUTTONS from '../../utils/constants/buttons'
import { TOKEN } from '../../utils/constants/itemsLocalStorage'

const Header = () => {
  const { Logout, updateAction, ActionTypes } = useContext(Context)

  // const handleClick = () => {
  //   localStorage.removeItem(TOKEN)
  //   window.location.reload()
  // }

  const handleAction = (actionType) => {
    updateAction(actionType)
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
        <Link onClick={() => handleAction(ActionTypes.BASE)} to="/Profiles" className="header__right--grid">
          <i className="fas fa-users" />
        </Link>
        <Link onClick={() => handleAction(ActionTypes.BASE)} to="/Tables" className="header__right--grid">
          <i className="fas fa-th" />
        </Link>
        <span onClick={() => handleAction(ActionTypes.BASKET)} className="header__right--basket">
          <i className="fas fa-shopping-basket" />
        </span>
        <div className="header__right--logout">
          <Button onClick={Logout} type={BUTTONS.CANCEL}>Log out</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
