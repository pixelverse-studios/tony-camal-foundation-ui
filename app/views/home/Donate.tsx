import CallToAction from '~/components/callToAction'
import styles from './Home.module.css'

const Donate = () => {
  const routeToGoFundMe = () =>
    window.open(
      'https://www.gofundme.com/f/tony-camal-foundation?utm_medium=email&utm_source=product&utm_campaign=p_email%2B4803-donation-alert-v5',
      '_blank',
      'noopener,noreferrer'
    )

  return (
    <section
      id="donate"
      className={`fullViewSection ${styles.viewContent} ${styles.Donate}`}>
      <h1>Why Donate?</h1>
      <div className={styles.donationContainer}>
        <article>
          <p>
            This fund will financially support those who require additional
            funds to achieve their goals of becoming a better person in society,
            whether it's for college, trade school, tutoring, or even funding a
            startup business. This money is not intended for Judo-related
            expenses but for better life skills.
          </p>
          <p>
            Creed: Tony Camal said{' '}
            <em>
              "I have helped many of my students, and that's what I do. Mutual
              welfare and benefit!
            </em>
            " <br />
            <b>- Jigoro Kano, founder of judo.</b>
          </p>
          <p>
            <em>
              "Whatever you choose to do in life, just be the best at it!"
            </em>
            <br />
            <b>- Sensei Tony Camal</b>
          </p>
        </article>
        <section className={styles.ctaContainer}>
          <p>
            Please consider contributing to the Tony Camal Foundation, as we
            continue to honor the legacy of our great Sensei.
          </p>
          <CallToAction label="Donate" onClick={routeToGoFundMe} />
        </section>
      </div>
    </section>
  )
}

export default Donate
