import React from 'react'
import './step-card.styles.css'

const StepCard = ({ img, title, text }) => {
  return (
    <figure class="col-3">
      <div class="box-number">
        <img class="number-icon" src={img} alt="icon order one" />
      </div>
      <figcaption class="shadow-box">
        <h5>{title}</h5>
        <p>{text}</p>
      </figcaption>
    </figure>
  )
}

export default StepCard
