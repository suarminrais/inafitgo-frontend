import React from 'react'
import OutlineCard from '../outline-card/outline-card.component'
import './outline.styles.css'
import gratis from './gratis.png'
import gizi from './gizi.png'
import trainer from './trainer.png'
import video from './video.png'

const OutLine = () => {
  return (
    <section className="gray padding-top-30">
      <div className="container">
        <div className="margin-auto align-center">
          <div className="col-1">
            <div className="content-center">
              <div className="content-title display-block">
                <img className="content-icon nomargin" src="https://bibit.id/img/ideaIcon.png" alt="icon idea" />
                <h3 className="margin-top-30">KEUNTUNGAN MENGGUNAKAN INAFITGO</h3>
              </div>
            </div>
          </div>
          <div className="invest-wrap margin-top-30">
            <OutlineCard img={gratis} title="Gratis Biaya Cek Status Gizi" teks="Inafitgo memberikan pelayanan cek status gizi secara gratis dengan cepat dan mudah." />
            <OutlineCard img={gizi} title="Konsultan GIZI tersertifikasi" teks="Inafitgo memiliki ahli gizi yang tersertifikasi dengan latar pendidikan yang baik." />
            <OutlineCard img={trainer} title="Konsultan Personal Trainer tersertifikasi" teks="Inafitgo memiliki personal trainer yang tersertifikasi dengan pengalaman nasional dan internasional." />
            <OutlineCard img={video} title="Bimbingan Gizi dan Latihan Fisik Video" teks="Inafitgo memberikan informasi dalam bentuk video interaktif." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutLine
