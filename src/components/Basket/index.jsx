import React from 'react'
import '../BasketItem/index.jsx'
import BasketItem from '../BasketItem/index.jsx'

import './styles.styl'

const Basket = () => {
  return (
    <div className="basket">
      <i className="fas fa-arrow-circle-left" />
      <div className="basketContainer">
        <BasketItem price="5.99" quantity="1" title="Lorem ipsum" image="https://i.imgur.com/gfMP09b.jpg" />
        <BasketItem price="5.99" quantity="1" title="Lorem ipsum" image="https://i.imgur.com/gfMP09b.jpg" />
        <BasketItem price="5.99" quantity="1" title="Lorem ipsum" image="https://i.imgur.com/gfMP09b.jpg" />
        <BasketItem price="5.99" quantity="1" title="Lorem ipsum" image="https://i.imgur.com/gfMP09b.jpg" />
      </div>
      <input
        type="text"
        placeholder="Extra info..."
        id=""
        className="basket__inputText"
      />
      <button className="basket__send">
        Send order
      </button>
    </div>
  )
}

export default Basket
