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
  const { updateAction, ActionTypes, actionLayout, setPeople, defaultPeopleDetail } = useContext(Context);
  const [peoples, setPeoples] = useState([])

  const PEOPLE_ROLES = {
    CHEFF: 2,
    WAITRESS: 3
  }

  useEffect(() => {
    userService.getAll()
      .then(res => setPeoples(addRamdonImage(res)))
      .catch(err => console.log(err))
  }, [actionLayout])

  const handleClick = (people) => {
    setPeople(people)
    updateAction(ActionTypes.PROFILE_UPDATE)
  }

  const handleClickAdd = (role) => {
    setPeople({ ...defaultPeopleDetail, roleId: role })
    updateAction(ActionTypes.PROFILE_ADD)
  }
  const getRndInteger = () => {
    const min = 1000000000000
    const max = 9999999999999
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addRamdonImage = (arrayPeoples) => {
    return arrayPeoples.map(p => {
      if (p.avatar === '') {
        const idAvatar = getRndInteger()
        p.avatar = `http://placeimg.com/500/500/people?t=${idAvatar}`
      }
      return p
    })
  }

  return (
    <div className="Profile">
      <h2 className="Profile__Title">{t('Profiles:Cheffs', 'Cocineros')}</h2>
      <div className="Profile__WaiterGrid">
        {peoples.filter(people => people.role.id === 2 && people.isActive).map(p => {
          return (
            <div key={p.id}>
              <PeopleCard avatar={p.avatar} onClick={() => handleClick(p)}/>
              <span>{`${p.firstname}`}</span>
            </div>
          )
        })}
        <button className="Profile--add" onClick={() => handleClickAdd(PEOPLE_ROLES.CHEFF)}><i className="fas fa-plus"/></button>
      </div>
      <h2 className="Profile__Title">{t('Profiles:Waiters', 'Meseros')}</h2>
      <div className="Profile__WaiterGrid">
        {peoples.filter(people => people.role.id === 3 && people.isActive).map(p => {
          return (
            <div key={p.id}>
              <PeopleCard avatar={p.avatar} onClick={() => handleClick(p)}/>
              <span>{`${p.firstname} ${p.lastname}`}</span>
            </div>
          )
        })}
        <button className="Profile--add" onClick={() => handleClickAdd(PEOPLE_ROLES.WAITRESS)}><i className="fas fa-plus"/></button>
      </div>
    </div>
  )
}

export default MenuGrid;
