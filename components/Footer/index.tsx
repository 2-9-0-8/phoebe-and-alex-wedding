import styles from '@styles/modules/Footer.module.css'

export default function Footer() {
  const email = 'thelilwhites23@gmail.com'

  return (
    <footer className={styles.footer}>
      <a href={`mailto:${email}`}>{email}</a>
    </footer>
  )
}
