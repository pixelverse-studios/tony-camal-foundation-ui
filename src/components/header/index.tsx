'use client'

import { useState, useMemo, useCallback } from 'react'
import { Drawer, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import Logo from '@/assets/CircleImage.png'
import CallToAction from '../callToAction'
import useWindowWidth from '@/utls/hooks/useWindowWidth'
import styles from './Header.module.scss'

const NavLinks = ({
  active,
  onClick
}: {
  active: string
  onClick: (section: string) => void
}) => (
  <ul className={styles.navLinks}>
    <li
      className={`${styles.navLink} ${
        active === 'mission' || active === '' ? styles.active : ''
      }`}
      onClick={() => onClick('mission')}>
      <span>Mission</span>
    </li>
    <li
      className={`${styles.navLink} ${
        active === 'missionExplanation' ? styles.active : ''
      }`}
      onClick={() => onClick('missionExplanation')}>
      <span>About</span>
    </li>
    <li
      className={`${styles.navLink} ${
        active === 'testimonials' ? styles.active : ''
      }`}
      onClick={() => onClick('testimonials')}>
      <span>Testimonials</span>
    </li>
    <li
      className={active === 'donate' ? styles.active : ''}
      onClick={() => onClick('donate')}>
      <CallToAction label="Donate" />
    </li>
  </ul>
)

const Header = () => {
  const windowWidth = useWindowWidth()
  const [opened, { open, close }] = useDisclosure(false)

  const [active, setActive] = useState<string>('')

  const showBurger = useMemo(() => windowWidth < 900, [windowWidth])

  const onItemClick = useCallback(
    (section: string) => {
      if (showBurger && opened) {
        close()
      }

      if (section === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setActive(section)
    },
    [close, opened, showBurger]
  )

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img onClick={() => onItemClick('/')} src={Logo.src} className={styles.logo} alt="logo" />
          <p>
            The Anthony Camal
            <span className={styles.after}>Foundation</span>
          </p>
        </div>
        {showBurger ? (
          <>
            <Burger
              className={styles.bigmac}
              onClick={opened ? close : open}
              opened={opened}
            />
            <Drawer
              overlayProps={{ backgroundOpacity: 0, blur: 0 }}
              className={styles.mobileNavDrawer}
              size="100%"
              position="bottom"
              opened={opened}
              onClose={close}
              withCloseButton={false}>
              <NavLinks active={active} onClick={onItemClick} />
            </Drawer>
          </>
        ) : (
          <NavLinks active={active} onClick={onItemClick} />
        )}
      </div>
    </header>
  )
}

export default Header
