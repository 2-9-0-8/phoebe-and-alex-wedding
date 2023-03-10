'use client'

import useCountdown from '@utils/useCountdown'
import styles from '@styles/modules/Countdown.module.css'

function Display({ value, type }: { value: number; type: string }) {
  return (
    <li className={styles.display}>
      <span>{value}</span>
      <span>{type}</span>
    </li>
  )
}

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown('06/17/2023')

  return (
    <div className={styles.countdown}>
      <ol className={styles['countdown__list']} role="list">
        <Display value={days} type="Days" />
        <Display value={hours} type="Hours" />
        <Display value={minutes} type="Minutes" />
        <Display value={seconds} type="Seconds" />
      </ol>
    </div>
  )
}
