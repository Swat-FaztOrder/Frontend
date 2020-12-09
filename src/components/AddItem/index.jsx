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
        <div className="addItem__form--group">
          <label htmlFor="title">Add title</label>
          <input type="text" id="title" />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="details">Add details</label>
          <input type="text" id="details" />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="price">Add price</label>
          <input type="text" id="price" />
        </div>
        <input type="submit" value="Send" className="addItem__form--submit" />
      </form>
    </div >
  )
}

export default AddItem
