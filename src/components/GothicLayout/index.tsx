import styles from './styles.module.css'

interface Props {
  className?: string
  children: React.ReactNode
}

export const GothicLayout = ({ className, children }: Props) => {
  return (
    <div className={`${styles.container} ${className ?? ''}`.trim()}>
      <div className={`${styles.fog} ${styles.fog1}`} />
      <div className={`${styles.fog} ${styles.fog2}`} />
      <div className={styles.vignette} />
      <div className={styles.noiseOverlay} />

      <div className={styles.frame} />
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      <div className={styles.inkSplatter1} />
      <div className={styles.inkSplatter2} />

      <div className={styles.content}>
        {children}
      </div>

      <div className={styles.bloodDrip} />
    </div>
  )
}
