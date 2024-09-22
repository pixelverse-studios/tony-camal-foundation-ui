import { Container, Title, Text, Button } from '@mantine/core'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.root}>
      <Container size="lg">
        <div className={styles.inner}>
          <div className={styles.content}>
            <Title className={styles.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}>
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text className={styles.description} mt={30}>
              Build fully functional accessible web applications with ease –
              Mantine includes more than 100 customizable components and hooks
              to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={styles.control}
              mt={40}>
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
