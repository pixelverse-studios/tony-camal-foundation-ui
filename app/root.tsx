import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'
import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { MantineProvider, createTheme } from '@mantine/core'

import Header from './components/header'
import Footer from './components/footer'

import './styles/reset.css'
import '@mantine/core/styles.css'
import './styles/app.css'

export const loader: LoaderFunction = async () => {
  return {
    ENV: {
      API_HOST: process.env.API_HOST,
      SLUG: process.env.SLUG
    }
  }
}

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  }
]

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

export function Layout() {
  const data = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`
          }}
        />
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Header />
          <Outlet />
          <Footer />
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {}
