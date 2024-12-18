import KanoImg from '@/assets/judo-dr-kano.png'
import styles from './Home.module.scss'

const About = () => {
  return (
    <section
      id="missionExplanation"
      className={`${styles.Explanation} ${styles.viewContent} fullViewSection`}>
      <div className="pageContent">
        <h1>Maximum Efficiency & Mutual Benefit</h1>
        <div className={styles.explContent}>
          <section>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/qomNXTQsybA?mute=1&playsinline=1"
                title="Anthony Camal Tribute"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <article>
              <p className="card">
                The goal of mutual welfare and benefit extends Dr. Kano's belief
                that Judo could help the individual become a better member of
                society. Dr. Kano felt that the personal discipline that Judo
                taught would extend beyond the dojo into daily life and could
                allow the judoka to become a more productive member of society.
              </p>
              <p className="card">
                We try to introduce students to Judo as a lifetime pursuit, a
                skilled art requiring infinite perfecting. By introducing
                traditional Judo etiquette and teaching the Japanese names of
                the techniques, we also introduce our members to the sport's
                cultural roots.
              </p>
            </article>
          </section>
          <section>
            <article className="card">
              <p>
                For many of us, a Judo Dojo is a place of stability and
                community, where people watch out for you, in and out of the
                dojo
              </p>
              <p className="citation">Sensei Jigoro Kano</p>
            </article>
            <img src={KanoImg.src} alt="Dr Kano judo image" />
          </section>
        </div>
      </div>
    </section>
  )
}

export default About
