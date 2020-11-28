import React from 'react'
import waiter from '../../assets/waiter.png'
import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const PeopleDetails = () => {
  const { t } = useTranslation(['PeopleDetails'])

  return (
    <div className="People">
      <div className="People__data">
        <div className="People__data--image">
          <PeopleCard image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="People__data--container">
          <p className="container__input">Nombre 
            <input placeholder="Type your name"></input>
          </p>
          <p className="container__input">Categoria 
            <input type="submit" className="container__input" value="Cheff"></input>
          </p>
          <p className="container__input">E-mail 
            <input placeholder="Type your E-mail"></input>
          </p>
          <p className="container__input">Password 
            <input placeholder="Type your Password"></input>
          </p>
        </div>
      </div>
      <div className="People__buttons">
        <button className="People__buttons--left">Delete</button>
        <button className="People__buttons--right">Update</button>
      </div>
    </div>
  )
}

export default PeopleDetails
