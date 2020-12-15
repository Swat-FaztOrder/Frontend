import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageButton from '../LanguageButton/index.jsx'
import Button from '../Button/index.jsx'
import { Context } from '../../Context'
import BUTTONS from '../../utils/constants/buttons'
import { USER } from '../../utils/constants/itemsLocalStorage'
import './styles.styl'

const Header = () => {
  const { Logout, updateAction, ActionTypes, selectedTable } = useContext(Context)
  const user = JSON.parse(window.localStorage.getItem(USER))

  const handleAction = (actionType) => {
    if (selectedTable) {
      updateAction(actionType)
    }

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
        {
          user?.role === 'admin' && <Link onClick={() => handleAction(ActionTypes.BASE)} to="/Profiles" className="header__right--grid">
            <i className="fas fa-users" />
          </Link>
        }
        {
          user?.role !== 'chef' && <Link onClick={() => handleAction(ActionTypes.BASE)} to="/Tables" className="header__right--grid">
            <i className="fas fa-th" />
          </Link>
        }
        {
          user?.role === 'waitress' &&
          <span onClick={() => handleAction(ActionTypes.BASKET)} className="header__right--basket">
            <i className="fas fa-shopping-basket" />
          </span>
        }
        <div className="header__right--logout">
          <Button onClick={Logout} type={BUTTONS.CANCEL}>Log out</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
