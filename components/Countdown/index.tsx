'use client'

import useCountdown from '@utils/useCountdown'
import styles from '@styles/modules/Countdown.module.css'
import { Suspense } from 'react';

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
    <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.countdown} data-animate>
        <ol className={styles['countdown__list']} role="list">
          <Display value={days} type="Days" />
          <Display value={hours} type="Hours" />
          <Display value={minutes} type="Minutes" />
          <Display value={seconds} type="Seconds" />
        </ol>
      </div>
    </Suspense>
  )
}
