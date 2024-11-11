import type { Metadata } from 'next'

import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/reset.scss'
import '@mantine/core/styles.css'
import '@/styles/app.scss'

export const metadata: Metadata = {
  title: 'The Anthony Camal Foundation',
  description: ''
}

const theme = createTheme({
  fontFamily: 'IBM Plex Sans',
  colors: {
    gold: [
      '#E3EDF7',
      '#C8D9EE',
      '#A9C3E4',
      '#86ABD9',
      '#5E8DCB',
      '#245B94',
      '#1F5084',
      '#1A4673',
      '#153B62',
      '#0E2847'
    ]
  },
  primaryColor: 'blue',
  radius: {
    custom: '9px'
  },
  defaultRadius: 'custom'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Header />
          {children}
          <Footer />
          <Notifications autoClose={5000} position="top-right" />
        </MantineProvider>
      </body>
    </html>
  )
}
