import React, { useState, useContext, useEffect } from 'react'

import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

import { Context } from '../../Context'

import rolservice from '../../services/rol'
import userService from '../../services/user'

const PeopleDetails = () => {
  const { t } = useTranslation(['PeopleDetails'])

  const [
    modalIsOpen,
    setmodalIsOpen
  ] = useState(false)

  const {
    defaultPeopleDetail,
    peopleDetail,
    setPeople,
    actionLayout,
    updateAction,
    ActionTypes
  } = useContext(Context)

  const [roles, setRoles] = useState([])

  useEffect(() => {
    rolservice.getAll()
      .then(res => setRoles(res))
      .catch(err => console.log(err))
  }, [])

  const addPeople = () => {
    console.log(peopleDetail)
    userService.create(peopleDetail)
      .then(userService.updateAvatar(peopleDetail))
      .then(res => {
        const { id } = res
        setPeople({ ...peopleDetail, id })
        if (peopleDetail.avatar != null && typeof peopleDetail.avatar === 'object') {

          userService.updateAvatar(peopleDetail, formData)
            .then(res => {
              setPeople(defaultPeopleDetail)
              setmodalIsOpen(true)
              updateAction(ActionTypes.BASE)
            })
        }
      })
      .catch(err => console.log(err))

    setmodalIsOpen(true)
  }

  const updatePeople = () => {
    const formData = new FormData();
    userService.update(peopleDetail)
      .then((res) => {

        if (peopleDetail.avatar != null && typeof peopleDetail.avatar === 'object') {

          userService.updateAvatar(peopleDetail, formData)
            .then(res => {
              setPeople(defaultPeopleDetail)
              setmodalIsOpen(true)
              updateAction(ActionTypes.BASE)
            })
        } else {
          setPeople(defaultPeopleDetail)
          setmodalIsOpen(true)
          updateAction(ActionTypes.BASE)
        }
      })
      .catch(err => console.log(err))

    setmodalIsOpen(true)
  }

  const deletePeople = () => {
    userService.delete(peopleDetail.id)
      .then(res => {
        setPeople(defaultPeopleDetail)
        setmodalIsOpen(true)
        updateAction(ActionTypes.BASE)
      })
      .catch(err => console.log(err))

    setmodalIsOpen(true)
  }

  return (
    <div className="People">
      <div className="People__data">
        <div className="People__data--image">
          <label htmlFor="filePeople">
            <PeopleCard avatar={peopleDetail.avatar} />
          </label>
          <input
            id="filePeople"
            type="file"
            onChange={(e) => setPeople({ ...peopleDetail, avatar: e.target.files[0] })}
            hidden
          />
        </div>
        <div className="People__data--container">
          <p className="container__input">{t('PeopleDetails:Names', 'Nombres')}
            <input
              value={peopleDetail.firstname}
              placeholder={t('PeopleDetails:Type_your_name', 'Digite su nombre')}
              onChange={(e) => setPeople({ ...peopleDetail, firstname: e.target.value })}
            />
          </p>
          <p className="container__input">{t('PeopleDetails:LastName', 'Apellidos')}
            <input
              value={peopleDetail.lastname}
              placeholder={t('PeopleDetails:Type_your_lastname', 'Digite su apellido"')}
              onChange={(e) => setPeople({ ...peopleDetail, lastname: e.target.value })}
            />
          </p>
          {actionLayout === ActionTypes.PROFILE_ADD &&
            <>
              <p className="container__input">{t('PeopleDetails:Category', 'Categoria')}
                <select
                  disabled
                  value={peopleDetail.roleId}
                  onChange={(e) => setPeople({ ...peopleDetail, roleId: e.target.value })}
                >
                  <option value={0}>Select</option>
                  {roles.map(rol => <option key={rol.id} value={rol.id}>{rol.name}</option>)}
                </select>
              </p>
              <p className="container__input">{t('PeopleDetails:Mail', 'Correo')}
                <input
                  placeholder={t('PeopleDetails:Type_your_mail', 'Digite su mail')}
                  value={peopleDetail.email}
                  onChange={(e) => setPeople({ ...peopleDetail, email: e.target.value })}
                />
              </p>
            </>
          }
        </div>
      </div>
      <div className="People__buttons">
        {actionLayout === ActionTypes.PROFILE_ADD ?

          <button
            onClick={() => addPeople()}
            className="People__buttons--add"
          >{t('NewDetails:Add', 'Agregar')}</button> :
          <>
            <button onClick={() => updatePeople()} className="People__buttons--update" >
              {t('PeopleDetails:Update', 'Actualizar')}
            </button>
            <button onClick={() => deletePeople()} className="People__buttons--delete">
              {t('PeopleDetails:Delete', 'Borrar')}
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default PeopleDetails
