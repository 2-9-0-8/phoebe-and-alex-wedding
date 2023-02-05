import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Container from '@components/Container'
import styles from '@styles/modules/Landing.module.css'
import Link from 'next/link'
import Sunflower from '@components/Sunflower'

const Countdown = dynamic(() => import('@components/Countdown'), { ssr: false })

export default function Home() {
  return (
    <>
      <Sunflower />
      <main>
        <Container>
          <div className={styles.landing}>
            <p className={styles['landing__message']} data-animate>
              We're getting married and we'd love you to be there! Please{' '}
              <Link href="/details" data-underline="hide-on-hover">
                click here
              </Link>{' '}
              for further details and to confirm if you can make the date.
            </p>
            <Suspense fallback={'Countdown loading...'}>
              <Countdown />
            </Suspense>
          </div>
        </Container>
      </main>
    </>
  )
}
