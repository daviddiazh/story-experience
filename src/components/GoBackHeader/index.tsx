import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface Props {
  label?: string
}

export const GoBackHeader = ({ label = 'VOLVER' }: Props) => {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <span className={styles.arrow}>←</span>
        {label}
      </button>
    </header>
  )
}
