'use client'
import { useCallback } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import KanoImg from '@/assets/judo-dr-kano.jpg'
import CallToAction from '@/components/callToAction'
import styles from './Home.module.scss'

const Hero = () => {
  const onActionClick = useCallback(() => {
    const element = document.getElementById('missionExplanation')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section>
      <section
        id="mission"
        className={`${styles.Mission} ${styles.viewContent} fullViewSection`}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/qomNXTQsybA?autoplay=1&mute=1"
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
            <br />
            Powered by{' '}
            <a href="https://youtubeembedcode.com">
              how to get embed code from youtube
            </a>{' '}
            and{' '}
            <a href="https://howtostopgamstop.com/">how to cancel gamstop</a>
          </iframe>
        </div>
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
      </section>
      <section
        id="missionExplanation"
        className={`${styles.Explanation} ${styles.viewContent} fullViewSection`}>
        <h1>Maximum Efficiency & Mutual Benefit</h1>
        <div className={styles.explContent}>
          <article>
            <p>
              The goal of mutual welfare and benefit extends Dr. Kano's belief
              that Judo could help the individual become a better member of
              society. Dr. Kano felt that the personal discipline that Judo
              taught would extend beyond the dojo into daily life and could
              allow the judoka to become a more productive member of society.
            </p>
            <p>
              We try to introduce students to Judo as a lifetime pursuit, a
              skilled art requiring infinite perfecting. By introducing
              traditional Judo etiquette and teaching the Japanese names of the
              techniques, we also introduce our members to the sport's cultural
              roots.
            </p>
            <p>
              For many of us, a Judo Dojo is a place of stability and community,
              where people watch out for you, in and out of the dojo. Sensei
              Jigoro Kano
            </p>
          </article>
          <img src={KanoImg.src} alt="Dr Kano judo image" />
        </div>
      </section>
    </section>
  )
}

export default Hero
