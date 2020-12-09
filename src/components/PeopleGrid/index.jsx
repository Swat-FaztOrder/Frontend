import React, { useContext } from 'react';
import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Context */
import { Context } from '../../Context'

import './styles.styl';

const MenuGrid = () => {
  const { t } = useTranslation(['Profiles'])
  const { updateAction, ActionTypes } = useContext(Context);

  return (
    <div className="Profile">
      <h2 className="Profile__Title">{t('Profiles:Cheffs', 'Cocineros')}</h2>
      <div className="Profile__ChefGrid">
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4253305/pexels-photo-4253305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4050084/pexels-photo-4050084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/2494704/pexels-photo-2494704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <button className="Profile--add" onClick={() => updateAction(ActionTypes.PROFILE_ADD)}><i className="fas fa-plus"/></button>
      </div>
      <h2 className="Profile__Title">{t('Profiles:Waiters', 'Meseros')}</h2>
      <div className="Profile__WaiterGrid">
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4921399/pexels-photo-4921399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4254255/pexels-photo-4254255.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4254284/pexels-photo-4254284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4254270/pexels-photo-4254270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4921256/pexels-photo-4921256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/733761/pexels-photo-733761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4920897/pexels-photo-4920897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4341034/pexels-photo-4341034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <PeopleCard onClick={() => updateAction(ActionTypes.PROFILE_UPDATE)} image="https://images.pexels.com/photos/4920892/pexels-photo-4920892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <button className="Profile--add" onClick={() => updateAction(ActionTypes.PROFILE_ADD)}><i className="fas fa-plus"/></button>
      </div>
    </div>
  )
}

export default MenuGrid;
