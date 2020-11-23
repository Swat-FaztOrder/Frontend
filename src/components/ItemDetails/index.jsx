import React from 'react';

import './styles.styl';

const ItemDetails = ({ extras, image, title, details, price }) => {
  return (
    <div className="itemDetails">
      <img className="itemDetails__image" src="https://i.imgur.com/gfMP09b.jpg" alt="" />
      <i className="fas fa-arrow-circle-left" id="itemDetails__arrow" />
      <h2 className="itemDetails__title">{title}</h2>
      <div className="itemDetails__subtitle">
        <p>{details}</p>
        <h3>{price}</h3>
      </div>
      <span>ADD OPTIONS</span>
      <div className="itemDetails__extras">
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input type="checkbox" id="cbox1" />
            <p>Extra Cheese</p>
          </div>
          <p className="itemDetails__extras--lineRight">$5.99</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input type="checkbox" id="cbox2" />
            <p>Extra Cheese</p>
          </div>
          <p className="itemDetails__extras--lineRight">$5.99</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input type="checkbox" id="cbox3" />
            <p>Extra Cheese</p>
          </div>
          <p className="itemDetails__extras--lineRight">$5.99</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input type="checkbox" id="cbox4" />
            <p>Extra Cheese</p>
          </div>
          <p className="itemDetails__extras--lineRight">$5.99</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Extra info..."
        id=""
        className="itemDetails__inputText"
      />
      <button className="itemDetails__addOrder">
        Add to order
      </button>
    </div>
  )
}

export default ItemDetails;
