import { useState } from 'react'
import { Container, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import styles from './Nav.module.css'

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' }
]
const Nav = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      data-active={active === link.link || undefined}
      onClick={event => {
        event.preventDefault()
        setActive(link.link)
      }}>
      {link.label}
    </a>
  ))

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}

export default Nav
