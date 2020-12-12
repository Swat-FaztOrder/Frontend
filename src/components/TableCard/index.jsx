import React, { useState } from 'react';
import './styles.styl';

import { Link } from 'react-router-dom';

/* Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'

/* Constants */
import ROUTES from '../../utils/constants/routes'

const TableCard = ({ title, state, onClick }) => {
  const [role, setRole] = useState(JSON.parse(window.localStorage.getItem(USER)).role)
  return (
    <Link to={role === 'waitress' && ROUTES.MENU} className="tableCard" aria-label="table card" onClick={onClick}>
      <h3 aria-label="table card title" className="tableCard--Title">
        {title}
      </h3>
      <h3 aria-label="table card state" className="tableCard--State">
        {state}
      </h3>
    </Link>

  )
}

export default TableCard;
