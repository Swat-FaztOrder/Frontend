import React from 'react';

/* Components */
import Header from '../Header/index.jsx'
import MenuCategories from '../MenuCategories/index.jsx';
import RightContainer from '../RightContainer/index.jsx';
import constants from '../../utils/constants/routes'

/* Hooks */
import { useLocation } from 'react-router-dom'

/* Styles */
import './styles.styl'

const index = ({ children }) => {
  const location = useLocation().pathname

  const HeaderComponent = location !== constants.SIGN_IN ? <Header/> : ''
  const MenuComponent = location !== constants.SIGN_IN && location !== constants.KITCHEN ? <MenuCategories/> : ''
  const RightComponent = location !== constants.SIGN_IN && location !== constants.KITCHEN ? <RightContainer/> : ''

  return (
    <>
      {HeaderComponent}
      <div className={`Main${location !== '/signin' && location !== constants.KITCHEN ? '' : '--Login'}`}>
        {MenuComponent}
        {children}
        {RightComponent}
      </div>
    </>
  );
}

export default index;
