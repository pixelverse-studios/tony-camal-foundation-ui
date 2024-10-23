import styles from './Tesitmonials.module.css'
import { testimonial } from './data'
const Testimonials = () => {
  return (
    <div className={styles.testimonial_container}>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.card_container}>
        {testimonial.map((data, index) => {
          return (
            <div key={index} className={styles.card}>
              <p>{data.context}</p>
              <h6>{data.name}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
