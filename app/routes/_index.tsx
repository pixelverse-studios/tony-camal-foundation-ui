import type { MetaFunction } from '@remix-run/node'

import HomePage from '~/views/home'
declare global {
  interface Window {
    ENV: {
      API_HOST: string
      SLUG: string
    }
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Tony Camal Foundation' },
    { name: 'description', content: 'Welcome to Tony Camal Foundation' }
  ]
}

export default function Index() {
  return <HomePage />
}
