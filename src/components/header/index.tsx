'use client'

import { useCallback, useMemo, useState } from 'react'
import { Drawer, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import Logo from '@/assets/CircleImage.png'
import CallToAction from '../callToAction'
import useWindowWidth from '@/utls/hooks/useWindowWidth'
import useScrollWatcher from '@/utls/hooks/useScrollWatcher'
import styles from './Header.module.scss'

const MISSION = 'mission'
const ABOUT = 'missionExplanation'
const TESTIMONIALS = 'testimonials'
const DONATE = 'donate'

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
        active === MISSION || active === '' ? styles.active : ''
      }`}
      onClick={() => onClick(MISSION)}>
      <span>Mission</span>
    </li>
    <li
      className={`${styles.navLink} ${active === ABOUT ? styles.active : ''}`}
      onClick={() => onClick(ABOUT)}>
      <span>About</span>
    </li>
    <li
      className={`${styles.navLink} ${
        active === TESTIMONIALS ? styles.active : ''
      }`}
      onClick={() => onClick(TESTIMONIALS)}>
      <span>Testimonials</span>
    </li>
    <li
      className={active === DONATE ? styles.active : ''}
      onClick={() => onClick(DONATE)}>
      <CallToAction label="Donate" />
    </li>
  </ul>
)

const Header = () => {
  const windowWidth = useWindowWidth()
  const [opened, { open, close }] = useDisclosure(false)

  const [active, setActive] = useState<string>(MISSION)

  const showBurger = useMemo(() => windowWidth < 900, [windowWidth])

  useScrollWatcher(MISSION, setActive)
  useScrollWatcher(ABOUT, setActive)
  useScrollWatcher(TESTIMONIALS, setActive)
  useScrollWatcher(DONATE, setActive)

  const onItemClick = useCallback(
    (section: string) => {
      if (showBurger && opened) {
        close()
      }

      if (section === '' || section === '/') {
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
        <div onClick={() => onItemClick('/')} className={styles.logoContainer}>
          <img src={Logo.src} className={styles.logo} alt="logo" />
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
