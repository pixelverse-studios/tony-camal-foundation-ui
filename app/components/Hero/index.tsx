import styles from './Hero.module.css'
import CTAButton from '../CTAButton'
const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.content}>
        <div className={styles.video_holder}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qomNXTQsybA"
            title="Tony Camal Foundation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>

        <div className={styles.mission_section}>
          <h1 className={styles.title}>Our Mission</h1>
          <p className={styles.mission_text}>
            To introduce to our students the physical skills of Judo and its
            philosophy and traditions. The main principles of Judo are "Maximum
            Efficiency" and "Mutual Welfare and Benefit."
          </p>
          <CTAButton label={'Learn More →'} />
        </div>
      </div>
    </div>
  )
}

export default Hero
