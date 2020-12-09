import React from 'react';

/* styles */
import './styles.styl';

const AddItem = () => {

  return (
    <div className="addItem">
      <form action="" className="addItem__form">
        <i className="fas fa-arrow-circle-left arrow" />
        <div className="addItem__form--image">
          <i className="fas fa-plus" />
        </div>
        <div className="addItem__form--title">
          <label htmlFor="">Add title</label>
          <input type="text" placeholder="Add title" />
        </div>
        <div className="addItem__form--details">
          <label htmlFor="">Add title</label>
          <input type="text" placeholder="Add details" />
        </div>
        <div className="addItem__form--price">
          <input type="text" placeholder="Add price" />
        </div>
        <input type="submit" value="" className="addItem__form--submit" />
      </form>
    </div >
  )
}

export default AddItem
