import React from 'react';

import './styles.styl';

const ItemDetails = ({ extras, image, title, details, price }) => {
  return (
    <div className="ItemDetails">
      <img className="ItemDetails__image" src="" alt="" />
      <h2 className="ItemDetails__title">{title}</h2>
      <div className="ItemDetails__subtitle">
        <p>{details}</p>
        <h3>{price}</h3>
      </div>
      <span>ADD OPTIONS</span>
    </div>
  )
}

export default ItemDetails;
