'use client'

import CallToAction from '@/components/callToAction'
import Background from '@/assets/DonationBackground.png'
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
        <h1>Make an impact</h1>
        <img src={Background.src} alt="judo-fighter-image" />
        <div className={styles.donationContainer}>
          <article>
            <p>
              This fund will financially support those who require additional
              funds to achieve their goals of becoming a better person in
              society, whether it's for college, trade school, tutoring, or even
              funding a startup business. This money is not intended for
              Judo-related expenses but for better life skills.
            </p>
            <p>
              Please consider contributing to{' '}
              <em>the Anthony Camal Foundation</em>, as we continue to honor the
              legacy of our great Sensei.
            </p>
          </article>
          <article className={`card ${styles.sensei}`}>
            <p>"Whatever you choose to do in life, just be the best at it!"</p>
            <p className="citation">Sensei Tony Camal</p>
          </article>
          <CallToAction label="Donate" onClick={routeToGoFundMe} />
        </div>
      </div>
    </section>
  )
}

export default Donate
