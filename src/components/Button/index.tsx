import styles from './styles.module.css'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({ text, className, ...rest }: Props) => {
  return (
    <button className={`${styles.btn} ${className ?? ''}`.trim()} {...rest}>
        <span className={styles.btnText}>{text?.trim()}</span>
        <span className={styles.btnGlow} />
    </button>
  )
}
