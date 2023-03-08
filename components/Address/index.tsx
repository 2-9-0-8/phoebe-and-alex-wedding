import styles from '@styles/modules/Address.module.css' // @ts-ignore
import { location } from '@data/location.ts'

export default function Address() {
  return (
    <div className={styles.address}>
      <address>
        {location.address.split(', ').map((line: string) => (
          <strong key={line}>{line}</strong>
        ))}
      </address>
    </div>
  )
}
