import HorizontalRule from '@components/HorizontalRule'
import styles from '@styles/modules/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} data-animate>
      <h3 className={styles['footer__title']}>
        A & P
      </h3>
      <HorizontalRule inlineSize={150} spacing={6} colour={'var(--taupe)'} />
      <p>17/06/2023</p>
    </footer>
  )
}
