import React from 'react'
import './media.styles.css'
import a from '../../assets/sponsor/logo_ajinomoto.png'
import b from '../../assets/sponsor/logo_herbalife.png'
import c from '../../assets/sponsor/logo_indofood.png'
import d from '../../assets/sponsor/logo_nestle.png'
import e from '../../assets/sponsor/logo_nutrifood.png'
import f from '../../assets/sponsor/logo_pama.png'
import g from '../../assets/sponsor/logo_prodia.png'

const Media = () => {
  return (
    <section className="container">
      <div className="row-col-block margin-top-100">
        {/* <div className="col-1 margin-bottom-50">
          <div className="content-center align-center">
            <h3 className="font-22 margin-top-30 margin-bottom-30">Telah diliput oleh</h3>
            <div className="affiliate">
              <a href="https://www.cnbcindonesia.com/investment/20190208191512-21-54589/bibit-robot-reksa-dana-yang-mengincar-200000-milenial" target="_blank" rel="noopener noreferrer"><img src="https://bibit.id/img/cnbc.png" alt="icon cnbc" /></a>
              <a href="https://dailysocial.id/post/stockbit-akuisisi-bibit/" target="_blank" rel="noopener noreferrer"><img src="https://bibit.id/img/dailysocial.png" alt="icon daily social" /></a>
              <a href="https://www.dealstreetasia.com/stories/indonesias-trader-platform-stockbit-acquires-mutual-fund-app-bibit-121413/" target="_blank" rel="noopener noreferrer"><img src="https://bibit.id/img/deal-street.png" alt="icon deal street asia" /></a>
            </div>
          </div>
        </div>
        <div className="col-1">
          <div className="content-center align-center">
            <div className="col-box nopadding-mob">
              <h2>Mulai Tanam Bibit Investasimu</h2>
              <div className="digital-store-bottom">
                <a href="https://play.google.com/store/apps/details?id=com.bibit.bibitid" target="_blank rel=">
                  <img src="https://bibit.id/img/playStore.png" alt="icon playstore" />
                </a>
                <a href="https://itunes.apple.com/id/app/bibit-investasi-reksadana/id1445856964?mt=8" target="_blank" rel="noopener noreferrer">
                  <img src="https://bibit.id/img/appStore.png" alt="icon appstore" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-1 margin-bottom-50">
          <div className="content-center align-center">
            <h3 className="font-22 margin-top-30 margin-bottom-30">Partner Kami</h3>
            <div className="invest-manager">
              <img src={a} alt="" />
              <img src={b} alt="" />
              <img src={c} alt="" />
              <img src={d} alt="" />
              <img src={e} alt="" />
              <img src={f} alt="" />
              <img src={g} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media
