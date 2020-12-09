import React from 'react';
import './styles.styl';

const MenuCard = ({ onClick, image, title, price }) => {
  return (
    <div onClick={onClick} className="menuCard" aria-label="menu card">
      <div className="menuCard__container" aria-label="menu card container">
        <img
          aria-label="menu card image"
          className="menuCard__containter--image"
          src={image}
        />
        <div className="menuCard__container--text">
          <h3 aria-label="menu card title" className="menuCard__container--textTitle">
            {title}
          </h3>
          <h3 aria-label="menu card price" className="menuCard__container--textPrice">
            ${price}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default MenuCard;
