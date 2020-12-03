import React from 'react';

/* Styles */
import './styles.styl'

const Button = ({ children, type, onClick }) => {
  return (
    <section className="Button">
      <button onClick={onClick} className={`Button__container Button__container--${type}`}>{children}</button>
    </section>
  );
}

export default Button;
