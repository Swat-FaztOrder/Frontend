import React from 'react';
import './styles.styl';

const PeopleCard = ({ people, onClick }) => {
  const IMAGE_DEFAULT = "https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
  return (
    <div onClick={onClick} className="PeopleCard" aria-label="people card">
      <div className="PeopleCard__container" aria-label="people card container">
        <img
          aria-label="people card image"
          className="PeopleCard__containter--image"
          src={IMAGE_DEFAULT}
        />
      </div>
    </div>
  )
}

export default PeopleCard;
