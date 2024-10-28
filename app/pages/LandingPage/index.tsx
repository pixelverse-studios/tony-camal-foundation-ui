import React from 'react'
import Layout from '~/lib/Layout'
import { Hero, Testimonials, NewsLetterSignUp } from '~/components'
import styles from './LandingPage.module.css'
const Landing = () => {
  return (
    <Layout>
      <section className={styles.section} id="hero">
        <Hero />
      </section>
      <section className={styles.section} id="testimonials">
        <Testimonials />
      </section>
      <section id="newslettersignup">
        <NewsLetterSignUp />
      </section>
    </Layout>
  )
}

export default Landing
