import React from 'react'
import { Link } from 'react-router-dom'

import './styles.styl'

const Modal = ({ title, image, subtitleA, subtitleB, last, buttons, buttonA, handleClickB, hideModal, to }) => {
  return (
    <section className="modalContainer">
      <main className="modalContainer__modal">
        <i onClick={hideModal} className="fas fa-arrow-circle-left arrow" />
        <div className="modalContainer__modal--title">
          <h1>{title}</h1>
        </div>
        <div className="modalContainer__modal--image">
          <img src={image} alt="" />
        </div>
        <div className="modalContainer__modal--subtitle">
          <h3>{subtitleA}</h3>
          <h3>{subtitleB}</h3>
        </div>
        <div className="modalContainer__modal--lastMessage">
          <h2>{last}</h2>
        </div>
        {buttons === 'true' &&
          <Link to={to} className="modalContainer__modal--buttons">
            <button className="modalContainer__modal--buttons-1" onClick={()=>handleClickB()}>
              {buttonA}
            </button>
          </Link>
        }
      </main>
    </section>
  )
}

export default Modal
