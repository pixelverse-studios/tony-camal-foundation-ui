import styles from './CallToAction.module.css'

type CallToActionProps = {
  label: string
  onClick?: () => void
}

const CallToAction = ({ label }: CallToActionProps) => {
  return <button className={styles.callToAction}>{label}</button>
}

export default CallToAction
