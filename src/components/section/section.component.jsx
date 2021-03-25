import React from 'react'
import './section.styles.css'

const Section = () => {
  return (
    <section className="container">
      <div className="shape-banner" style={{ transform: 'matrix(1, 0, 0, 1, 9.15, -3.30833)' }}></div>
      <div className="wrap-flex margin-top-10">
        <div className="col-flex width-60 nomargin-left">
          <div className="banner-desc">
            <h1>INVESTASI REKSA DANA <br />SECARA OTOMATIS</h1>
            <h2>Bibit menempatkan uang kamu ke portfolio <br />reksa dana secara cerdas dan tanpa ribet.</h2>
            <ul className="digital-store">
              <li className="inline-block">
                <a href="https://play.google.com/store/apps/details?id=com.bibit.bibitid" target="_blank" rel="noopener noreferrer">
                  <img src="https://bibit.id/img/playStore.png" alt="icon playstore" />
                </a>
              </li>
              <li className="inline-block">
                <a href="https://itunes.apple.com/id/app/bibit-investasi-reksadana/id1445856964?mt=8" target="_blank" rel="noopener noreferrer">
                  <img src="https://bibit.id/img/appStore.png" alt="icon appstore" />
                </a>
              </li>
            </ul>
            <p>Terdaftar dan Diawasi oleh</p>
            <div>
              <a href="https://reksadana.ojk.go.id/Public/APERDPublic.aspx?id=BTB69" target="_blank" rel="noopener noreferrer">
                <img src="https://bibit.id/img/ojk.png" alt="ojk icon" width="118px" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-flex width-40 nomargin-right">
          <div className="phone-container" style={{ transform: 'matrix(1, 0, 0, 1, -9.15, 3.30833)' }}>
            <img className="phone-img" src="https://bibit.id/img/mockup.png" alt="phone" />
            <video className="phone-video" autoplay="" loop="" muted="" playsinline="">
              <source src="https://bibit.id/img/bibitvideo.mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
