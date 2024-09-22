import { Anchor, Group, ActionIcon, rem } from '@mantine/core'
import styles from './Footer.module.css'

const links = [{ link: '#', label: 'Contact' }]

const Footer = () => {
  const items = links.map(link => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={event => event.preventDefault()}
      size="sm">
      {link.label}
    </Anchor>
  ))

  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div>logo</div>

        <Group className={styles.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            icon1
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            icon2
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            icon3
          </ActionIcon>
        </Group>
      </div>
    </div>
  )
}

export default Footer
