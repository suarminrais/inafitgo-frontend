import React from 'react'
import StepCard from '../step-card/step-card.component'
import './step.styles.css'

const Step = () => {
  return (
    <section className="nomargin grey">
      <div className="container">
        <div className="row-col-flex margin-auto">
          <StepCard img="https://bibit.id/img/orderOne.png" title="Cek Status Gizi dan Fisik" text="Kita akan mempelajari status gizi dan kondisi fisik kamu sehingga bisa membuat formula yang tepat sesuai kebutuhan" />
          <StepCard img="https://bibit.id/img/orderTwo.png" title="Konsultasi Gizi" text="Kita akan mempelajari status gizi kamu sehingga bisa membuat formula yang tepat sesuai kebutuhan kamu" />
          <StepCard img="https://bibit.id/img/orderThree.png" title="Konsultasi Personal Trainer" text="Kita akan mempelajari status fisik kamu sehingga bisa membuat formula yang tepat sesuai kebutuhan kamu" />
        </div>
      </div>
    </section>
  )
}

export default Step
