import HorizontalRule from '@components/HorizontalRule'
import styles from '@styles/modules/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} data-animate>
      <h3 className={styles['footer__title']}>
        A & P
      </h3>
      <HorizontalRule inlineSize={200} spacing={8} />
      <p>17/06/2023</p>
    </footer>
  )
}
