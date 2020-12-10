import React, { useContext, useEffect, useState } from 'react';
import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Context */
import { Context } from '../../Context'

import userService from '../../services/user'

import './styles.styl';

const MenuGrid = () => {
  const { t } = useTranslation(['Profiles'])
  const { updateAction, ActionTypes, actionLayout, setPeople } = useContext(Context);
  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    userService.getAll()
      .then(res => setPeoples(addRamdonImage(res)))
      .catch(err => console.log(err))
  }, [actionLayout])

  const handleClick = (people) => {
    setPeople(people)
    updateAction(ActionTypes.PROFILE_UPDATE)
  }

  const handleClickAdd = () => {
    setPeople({})
    updateAction(ActionTypes.PROFILE_ADD)
  }
  const getRndInteger = () => {
    const min = 100000
    const max = 999999
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addRamdonImage = (arrayPeoples) => {
    return arrayPeoples.map(p => {
      if (p.avatar === null) {
        const idAvatar = getRndInteger()
        p.avatar = `https://images.pexels.com/photos/${idAvatar}/pexels-photo-${idAvatar}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
      }
      return p
    })
  }

  return (
    <div className="Profile">
      <h2 className="Profile__Title">{t('Profiles:Cheffs', 'Cocineros')}</h2>
      <div className="Profile__ChefGrid">
        {peoples.filter(people => people.role.id === 2 && people.isActive).map(p => {
          return <PeopleCard key={p.id} people={p} onClick={() => handleClick(p)}/>
        })}
        <button className="Profile--add" onClick={() => handleClickAdd()}><i className="fas fa-plus"/></button>
      </div>
      <h2 className="Profile__Title">{t('Profiles:Waiters', 'Meseros')}</h2>
      <div className="Profile__WaiterGrid">
        {peoples.filter(people => people.role.id === 3 && people.isActive).map(p => {
          return <PeopleCard key={p.id} people={p} onClick={() => handleClick(p)}/>
        })}
        <button className="Profile--add" onClick={() => handleClickAdd()}><i className="fas fa-plus"/></button>
      </div>
    </div>
  )
}

export default MenuGrid;
