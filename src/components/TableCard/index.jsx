import React from 'react';
import './styles.styl';

const TableCard = ({ title, state }) => {
  return (
    <div className="tableCard" aria-label="table card">
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
