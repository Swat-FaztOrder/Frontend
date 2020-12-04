import React from 'react';

/* Components */
import Header from '../Header/index.jsx'
import ItemDetails from '../ItemDetails/index.jsx';
import MenuCategories from '../MenuCategories/index.jsx';
import OrderDetails from '../OrderDetails/index.jsx';

/* Hooks */
import { useLocation } from 'react-router-dom'

/* Styles */
import './styles.styl'

const index = ({ children }) => {
  const HeaderComponent = useLocation().pathname !== '/signin' ? <Header/> : ''
  const MenuComponent = useLocation().pathname !== '/signin' ? <MenuCategories/> : ''
  const OrderComponent = useLocation().pathname !== '/signin' && <OrderDetails/>

  return (
    <>
      {HeaderComponent}
      <div className={`Main${useLocation().pathname !== '/signin' ? '' : '--Login'}`}>
        {MenuComponent}
        {children}
        {OrderComponent}
      </div>
    </>
  );
}

export default index;
