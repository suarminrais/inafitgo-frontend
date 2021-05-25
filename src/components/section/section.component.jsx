import React from 'react'
import './section.styles.css'
import phone from '../../assets/mockup/login.svg'

const Section = () => {
  return (
    <section className="container">
      <div className="shape-banner" style={{ transform: 'matrix(1, 0, 0, 1, 9.15, -3.30833)' }}></div>
      <div className="wrap-flex margin-top-10">
        <div className="col-flex width-60 nomargin-left">
          <div className="banner-desc">
            <h1>BERGIZI DAN BUGAR DENGAN INAFITGO <br /> #SEHATBERSAMAINAFITGO</h1>
            <h2>INAFITGO membantu anda dalam mengatur pola gizi yang baik dengan berkonsultasi dengan Ahli Gizi dan Membentuk tubuh yang ideal bersama Trainer Profesional yang tersertifikasi.</h2>
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
          </div>
        </div>
        <div className="col-flex width-40 nomargin-right">
          <div className="phone-container" style={{ transform: 'matrix(1, 0, 0, 1, -9.15, 3.30833)' }}>
            <img className="margin-auto width-60 phone-img" src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
