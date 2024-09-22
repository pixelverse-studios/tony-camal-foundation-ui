import React from 'react'
import Layout from '~/lib/Layout'
import { Hero, Testimonials, NewsLetterSignUp } from '~/components'

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <NewsLetterSignUp />
    </Layout>
  )
}

export default Landing
