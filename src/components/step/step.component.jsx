import React from 'react'
import StepCard from '../step-card/step-card.component'
import './step.styles.css'

const Step = () => {
  return (
    <section class="nomargin grey">
      <div class="container">
        <div class="row-col-flex margin-auto">
          <StepCard img="https://bibit.id/img/orderOne.png" title="Kita Pelajari Profil Kamu" text="Kita ingin mengetahui tujuan investasi kamu, umur kamu dan pandangan kamu terhadap resiko" />
          <StepCard img="https://bibit.id/img/orderTwo.png" title="Kita Bangun Portfolio Investasi Kamu" text="Kita berikan saran investasi yang optimal berdasarkan toleransi kamu terhadap resiko" />
          <StepCard img="https://bibit.id/img/orderThree.png" title="Uang Kamu Mulai Bekerja Lebih Keras Untuk Kamu" text="Set up sekali dan mulai lihat bibit masa depan kamu bertumbuh tanpa ribet" />
        </div>
      </div>
    </section>
  )
}

export default Step
