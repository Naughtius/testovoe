import React, { useMemo } from 'react'
import css from '../styles/pages/HomePage.module.scss'
// Components
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CustomSlider from '../components/Slider/Slider'

const HomePage = () => {
  const slider = useMemo(
    () => [
      {
        id: 1,
        title: 'First Feature',
        description:
          'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.',
        buttonText: 'Learn more',
        new: false,
      },
      {
        id: 2,
        title: 'Second Feature',
        description:
          'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.',
        buttonText: 'Learn more',
        new: false,
      },
      {
        id: 3,
        title: 'Third Feature',
        description:
          'The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother`s bed, and ate her up.',
        buttonText: 'Learn more',
        new: false,
      },
      {
        id: 4,
        title: 'Fourth Feature',
        description:
          'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.',
        buttonText: 'Learn more',
        new: true,
      },
    ],
    []
  )

  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <h1 className={css.h1}>Features</h1>
        <div className={css.descr}>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </div>
        <div className={css.slider}>
          <CustomSlider data={slider} />
        </div>
      </div>
      <Footer className={css.footer} />
    </div>
  )
}

export default HomePage
