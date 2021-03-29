import React from 'react'
import './step-card.styles.css'

const StepCard = ({ img, title, text }) => {
  return (
    <figure className="col-3">
      <div className="box-number">
        <img className="number-icon" src={img} alt="icon order one" />
      </div>
      <figcaption className="shadow-box">
        <h5>{title}</h5>
        <p>{text}</p>
      </figcaption>
    </figure>
  )
}

export default StepCard
