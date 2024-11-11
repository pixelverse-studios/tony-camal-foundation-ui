'use client'
import { ReactNode } from 'react'

import styles from './CallToAction.module.scss'

type CallToActionProps = {
  label: string | ReactNode
  onClick?: () => void
  disabled?: boolean
}

const CallToAction = ({
  label,
  onClick,
  disabled = false
}: CallToActionProps) => {
  return (
    <button
      onClick={onClick != undefined ? onClick : () => null}
      disabled={disabled}
      className={styles.callToAction}>
      {label}
    </button>
  )
}

export default CallToAction
