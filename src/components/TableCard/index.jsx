import React from 'react';
import './styles.styl';

/* Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'

const TableCard = ({ title, state, onClick }) => {
  const user = JSON.parse(window.localStorage.getItem(USER))
  return (
    <div className={state === 'In Progress' ? 'tableCard occupied' : 'tableCard'} aria-label="table card" onClick={user?.role === 'waitress' && onClick}>
      <h3 aria-label="table card title" className="tableCard--Title">
        {title}
      </h3>
      <h3 aria-label="table card state" className="tableCard--State">
        {state}
      </h3>
    </div>

  )
}

export default TableCard;
