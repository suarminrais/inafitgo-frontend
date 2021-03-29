import React from 'react'
import './outline-card.styles.css'

const OutlineCard = ({ img, title, teks }) => {
  return (
    <figure className="invest-box">
      <div className="invest-pic">
        <img src={img} alt="icon minim" />
      </div>
      <figcaption className="invest-desc">
        <h5>{title}</h5>
        <p>{teks}</p>
      </figcaption>
    </figure>
  )
}

export default OutlineCard
