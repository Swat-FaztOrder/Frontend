import React from 'react';
import ItemDetails from '../../components/ItemDetails/index.jsx';
import MenuGrid from '../../components/MenuGrid/index.jsx';

import './styles.styl'

const Menu = () => {
  return (
    <div className="Menu">
      <MenuGrid />
      <ItemDetails />
    </div>
  )
}

export default Menu;
