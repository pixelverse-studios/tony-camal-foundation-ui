import { Button } from '@mantine/core'
import styles from './CTAButton.module.css'

const CTAButton = ({ label }) => {
  return <Button className={styles.CTAButton}>{label}</Button>
}

export default CTAButton
