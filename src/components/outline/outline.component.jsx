import React from 'react'
import OutlineCard from '../outline-card/outline-card.component'
import './outline.styles.css'

const OutLine = () => {
  return (
    <section className="gray padding-top-30">
      <div className="container">
        <div className="margin-auto align-center">
          <div className="col-1">
            <div className="content-center">
              <div className="content-title display-block">
                <img className="content-icon nomargin" src="https://bibit.id/img/ideaIcon.png" alt="icon idea" />
                <h3 className="margin-top-30">KEUNTUNGAN INVESTASI DENGAN BIBIT</h3>
              </div>
            </div>
          </div>
          <div className="invest-wrap margin-top-30">
            <OutlineCard img="https://bibit.id/img/rpNol.svg" title="Gratis Biaya Komisi" teks="Biaya Rp0. Semua pembelian reksadana di Bibit gratis biaya komisi." />
            <OutlineCard img="https://bibit.id/img/minimInvestasi.svg" title="Dana Investasi yang Minim" teks="Kamu bisa mulai dengan dana serendah Rp10.000 dulu sampai kamu nyaman berinvestasi. Yang penting mulai." />
            <OutlineCard img="https://bibit.id/img/cairkanInvestasi.svg" title="Cairkan Investasimu Kapan Saja" teks="Dana investasi dapat dicairkan kapanpun dengan cepat tanpa penalti." />
            <OutlineCard img="https://bibit.id/img/taxFree.svg" title="Tidak Dipajak" teks="Keuntungan dari Reksa dana bukan merupakan objek pajak. Berbeda dengan investasi properti ataupun emas." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutLine
