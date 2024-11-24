'use client'
import { useCallback } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import CallToAction from '@/components/callToAction'
import JudoGym from '@/assets/Judo-gym.png'
import styles from './Home.module.scss'

const Hero = () => {
  const onActionClick = useCallback(() => {
    const element = document.getElementById('missionExplanation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section
      id="mission"
      className={`${styles.Mission} ${styles.viewContent} fullViewSection`}>
      <img src={JudoGym.src} alt="judo-gym-image" />
      <div className={`${styles.heroCard} card`}>
        <h1>Our Mission</h1>
        <p>
          To introduce to our students the physical skills of Judo and its
          philosophy and traditions. The main principles of Judo are "Maximum
          Efficiency" and "Mutual Welfare and Benefit."
        </p>
        <CallToAction
          onClick={onActionClick}
          label={
            <span>
              Learn More
              <FaArrowRight />
            </span>
          }
        />
      </div>
    </section>
  )
}

export default Hero
