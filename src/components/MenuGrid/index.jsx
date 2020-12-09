import React, { useContext } from 'react';
import MenuCard from '../MenuCard/index.jsx'

import { Context } from '../../Context'

import './styles.styl';

const MenuGrid = () => {
  const { updateAction, ActionTypes } = useContext(Context)

  const handleAction = (actionType) => {
    updateAction(actionType)
  }

  return (
    <div className="MenuGrid">
      <button className="MenuGrid--add" onClick={() => handleAction(ActionTypes.DISH_ADD)}><i className="fas fa-plus"/></button>
      <MenuCard onClick={() => handleAction(ActionTypes.DISH_UPDATE)} title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
      <MenuCard title="Lorem Ipsum" price="5.99" image="https://i.imgur.com/gfMP09b.jpg" />
    </div>
  )
}

export default MenuGrid;
