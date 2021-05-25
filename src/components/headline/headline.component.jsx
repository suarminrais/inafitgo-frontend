import React from 'react'
import './headline.styles.css'

const Headline = ({ image, icon, small = true, title, text, turn = false, accent = false }) => {
  return (
    <section className={`${accent ? "accent" : ""}`}>
      <div className="container">
        <figure className="wrap-flex">
          <div className={`col-flex width-50 ${turn ? "nomargin-left order-2" : "nomargin-right padding-left-30-desk order-1"}`}>
            <img className={`content-image parallax-1 ${small ? "width-60 margin-auto" : ''} ${turn ? '' : "margin-min-22"}`} src={image} alt="illustration" style={{ transform: "matrix(1, 0, 0, 1, 13.9, -8.33333)" }} />
          </div>
          <div className={`col-flex width-50 ${turn ? "nomargin-right order-1" : "nomargin-left order-2"}`}>
            <div className={`content-wrap ${turn ? 'align-right' : ""}`}>
              <div className="content-title">
                <img className="content-icon" src={icon} alt="icon processor" />
                <h3>{title}</h3>
              </div>
              <figcaption className="content-desc">
                <p>{text}</p>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Headline
