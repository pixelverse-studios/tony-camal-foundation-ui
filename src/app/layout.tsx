import type { Metadata } from 'next'

import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Favicon from '../../public/favicon.png'

import '@/styles/reset.scss'
import '@mantine/core/styles.css'
import '../styles/app.scss'

export const metadata: Metadata = {
  title: 'The Anthony Camal Foundation',
  description: '',
  icons: {
    icon: Favicon.src
  }
}

const theme = createTheme({
  fontFamily: 'IBM Plex Sans',
  colors: {
    red: [
      '#FFF9F2',
      '#FCF0E3',
      '#FAD8BB',
      '#F5B893',
      '#F07248',
      '#e91c00',
      '#D11800',
      '#AD1100',
      '#8C0E00',
      '#690900',
      '#420600'
    ]
  },
  primaryColor: 'red',
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
          {/* <Header2 /> */}
          <Header />
          {children}
          <Footer />
          <Notifications autoClose={5000} position="top-right" />
        </MantineProvider>
      </body>
    </html>
  )
}
