import React from 'react';

/* Components */
import Header from '../Header/index.jsx'
import MenuCategories from '../MenuCategories/index.jsx';
import OrderDetails from '../OrderDetails/index.jsx';
import constants from '../../utils/constants/routes'

/* Hooks */
import { useLocation } from 'react-router-dom'

/* Styles */
import './styles.styl'

const index = ({ children }) => {
  const location = useLocation().pathname

  const HeaderComponent = location !== constants.SIGN_IN ? <Header/> : ''
  const MenuComponent = location !== constants.SIGN_IN && location !== constants.KITCHEN ? <MenuCategories/> : ''
  const OrderComponent = location !== constants.SIGN_IN && location !== constants.KITCHEN ? <OrderDetails/> : ''

  return (
    <>
      {HeaderComponent}
      <div className={`Main${location !== '/signin' && location !== constants.KITCHEN ? '' : '--Login'}`}>
        {MenuComponent}
        {children}
        {OrderComponent}
      </div>
    </>
  );
}

export default index;
