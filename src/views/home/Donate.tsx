'use client'

import CallToAction from '@/components/callToAction'
import Background from '@/assets/JudoBow.png'
import styles from './Home.module.scss'

const Donate = () => {
  const routeToGoFundMe = () =>
    window.open(
      'https://www.gofundme.com/f/tony-camal-foundation?utm_medium=email&utm_source=product&utm_campaign=p_email%2B4803-donation-alert-v5?amount=50',
      '_blank',
      'noopener,noreferrer'
    )

  return (
    <section
      id="donate"
      className={`fullViewSection ${styles.viewContent} ${styles.Donate}`}>
      <div className="pageContent">
        <img src={Background.src} alt="judo-fighter-image" />
        <article className={`card ${styles.sensei}`}>
          <h1>Make an impact</h1>
          <div className={styles.donationContainer}>
            <article>
              <p>
                Please consider contributing to{' '}
                <em>the Anthony Camal Foundation</em>, as we continue to honor
                the legacy of our great Sensei.
              </p>
            </article>
            <article>
              I have helped a lot of my students that’s what I do. Mutual
              welfare and benefit! Jigoro Kano founder of judo
              <p className="citation">Sensei Anthony Camal</p>
            </article>
            <article>
              <p>Whatever you choose to do in life, just be the best at it!</p>
              <p className="citation">Sensei Anthony Camal</p>
            </article>
            <CallToAction label="Donate" onClick={routeToGoFundMe} />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Donate
