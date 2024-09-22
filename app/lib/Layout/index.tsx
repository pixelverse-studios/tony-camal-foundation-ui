import { ReactNode } from 'react'
import styles from './Layout.module.css'
import { Nav, Footer } from '~/components'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
