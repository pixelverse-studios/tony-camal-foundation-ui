import { ReactNode } from 'react'

import styles from './CallToAction.module.css'

type CallToActionProps = {
  label: string | ReactNode
  onClick?: () => void
}

const CallToAction = ({ label, onClick }: CallToActionProps) => {
  return (
    <button
      onClick={onClick != undefined ? onClick : () => null}
      className={styles.callToAction}>
      {label}
    </button>
  )
}

export default CallToAction
