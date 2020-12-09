import React from 'react';
import './styles.styl';

const PeopleCard = ({ image, onClick }) => {
  return (
    <div onClick={onClick} className="PeopleCard" aria-label="people card">
      <div className="PeopleCard__container" aria-label="people card container">
        <img
          aria-label="people card image"
          className="PeopleCard__containter--image"
          src={image}
        />
      </div>
    </div>
  )
}

export default PeopleCard;
