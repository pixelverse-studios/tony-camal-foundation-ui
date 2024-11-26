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
      <div className="pageContent">
        <div className={`${styles.heroCard} card`}>
          <h1>Our Mission</h1>
          <p>
            This fund will financially support those who require additional
            funds to achieve their goals of becoming a better person in society,
            whether it's for college, trade school, tutoring, or even funding a
            start-up business. This money is not intended for Judo-related
            expenses but for better life skills.
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
      </div>
    </section>
  )
}

export default Hero
